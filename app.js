// Get all select buttons
const selectBtns = document.querySelectorAll(".select-btn");
const ul = document.getElementById("player-list");
const allPlayerNumber = [];

// Add event listener to each select button
selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    // Get the player name
    const playerName = selectBtn
      .closest(".text-center")
      .querySelector(".player-name").innerText;
    if (ul.childElementCount < 5) {
      selectBtn.setAttribute('disabled', true);
      selectBtn.classList.add('disabled');
      const li = document.createElement("li");
      li.innerText = playerName;
      ul.appendChild(li);
      allPlayerNumber.push(li);
      console.log(allPlayerNumber);
    }
    else {
        alert('You can only select up to five players!');
    }
  });
});
