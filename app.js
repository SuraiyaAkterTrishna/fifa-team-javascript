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
    }
    else {
        alert('You can only select up to five players!');
    }
  });
});
document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerNumber = allPlayerNumber.length;
    const perPlayerField = document.getElementById('per-player');
    const perPlayerCost = perPlayerField.value;
    const playerExpenses = playerNumber * perPlayerCost;
    const playerExpensesElement = document.getElementById('player-expenses');
    playerExpensesElement.innerText = playerExpenses;
});
