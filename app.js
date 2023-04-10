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

// player expenses calculate 
document.getElementById('calculate-btn').addEventListener('click', function(){
    const playerNumber = allPlayerNumber.length;
    const perPlayerField = document.getElementById('per-player');
    const perPlayerCost = perPlayerField.value;
    if (perPlayerCost) { // check if input field has a value
        const playerExpenses = playerNumber * perPlayerCost;
        const playerExpensesElement = document.getElementById('player-expenses');
        playerExpensesElement.innerText = playerExpenses;
        perPlayerField.value = '';
    }
});
// total expenses calculate 
document.getElementById('total').addEventListener('click', function(){
    const playerExpensesElement = document.getElementById('player-expenses');
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseInt(playerExpensesString);
    const managerCostField = document.getElementById('manager');
    const managerCostString = managerCostField.value;
    const managerCost = parseInt(managerCostString)
    const coachCostField = document.getElementById('coach');
    const coachCostString = coachCostField.value;
    const coachCost = parseInt(coachCostString);
    if (managerCostString && coachCostString) { // check if input fields have a value
        const totalExpenses = playerExpenses + managerCost + coachCost;
        const totalExpensesElement = document.getElementById('total-expenses');
        totalExpensesElement.innerText = totalExpenses;
        managerCostField.value = '';
        coachCostField.value = '';
    }
})
