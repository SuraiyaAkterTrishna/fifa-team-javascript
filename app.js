/* function playerName(){
    const playerNameElement = document.getElementsByClassName('player-name');
    for (const player of playerNameElement) {
        return player;
    }
} */
// const selectButtons = document.getElementsByClassName('select-btn');
// for (const button of selectButtons) {
//     button.addEventListener('click', function(){
//         console.log(playerName());
//     });
// };

// Get all select buttons
const selectBtns = document.querySelectorAll(".select-btn");
const ul = document.getElementById("player-list");

// Add event listener to each select button
selectBtns.forEach((selectBtn) => {
  selectBtn.addEventListener("click", () => {
    // Get the player name
    const playerName = selectBtn
      .closest(".text-center")
      .querySelector(".player-name").innerText;
    if (ul.childElementCount < 5) {
      const li = document.createElement("li");
      li.innerText = playerName;
      ul.appendChild(li);
    }
    else {
        alert('You can only select up to five players!');
    }
  });
});
