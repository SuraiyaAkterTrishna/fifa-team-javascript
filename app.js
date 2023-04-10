const selectBtns = document.querySelectorAll(".select-btn");
const ul = document.getElementById("player-list");
const allPlayerNumber = [];

selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
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
