import "/CSS/style.css";

const players = [
  { name: "Player 1", score: 0 },
  { name: "Player 2", score: 0 },
];

const winScore = 100;
let currentPlayerIndex = 0;

const result = document.getElementById("result");
const roll = document.getElementById("roll-button");

function rollDice() {
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;
  return [num1, num2];
}

function displayRollResult(numRolls, currentPlayer) {
  for (let i = 0; i < numRolls; i++) {
    const [num1, num2] = rollDice();
    result.innerHTML = "";
    if (num1 === num2) {
      const result = document.getElementById("result");
      result.insertAdjacentHTML(
        "beforeend",
        `<h3>${currentPlayer.name} rolled: ${num1} and ${num2} (YAY)</h3>`
      );
      currentPlayer.score += 20;
    } else {
      result.insertAdjacentHTML(
        "beforeend",
        `<h3>${currentPlayer.name} rolled: ${num1} and ${num2}</h3>`
      );
      currentPlayer.score += num1 + num2;
    }
    console.log(`${currentPlayer.name}'s score: ${currentPlayer.score}`);
    result.insertAdjacentHTML(
      "beforeend",
      `<h3> ${currentPlayer.name}'s score: ${currentPlayer.score}</h3>`
    );
  }
}
function checkWin(currentPlayer) {
  if (currentPlayer.score >= winScore) {
    result.insertAdjacentHTML(
      "beforeend",
      `<p>${currentPlayer.name} wins with ${currentPlayer.score} points!</p>`
    );
    rollButton.disabled = true;
    return true;
  }
  return false;
}
function switchPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}
roll.addEventListener("click", function () {
  const numRolls = 2;
  const currentPlayer = players[currentPlayerIndex];

  displayRollResult(numRolls, currentPlayer);

  if (checkWin(currentPlayer)) {
    return;
  }
  switchPlayer();
});

// const winScores = [50, 100, 200]; // Array of different win score thresholds

// function checkWinMultipleThresholds(currentPlayer) {
//   for (let i = 0; i < winScores.length; i++) {
//     if (currentPlayer.score >= winScores[i]) {
//       result.insertAdjacentHTML(
//         "beforeend",
//         `<p>${currentPlayer.name} wins with ${currentPlayer.score} points! (Threshold: ${winScores[i]})</p>`
//       );
//       rollButton.disabled = true;
//       return true;
//     }
//   }
//   return false;
// }
