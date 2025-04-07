import "/CSS/style.css";

const players = [
  { name: "Player 1", score: 0 },
  { name: "Player 2", score: 0 },
];

const winScore = 100;
let currentPlayerIndex = 0;
let turnCounter = 1;

const result = document.getElementById("result");
const roll = document.getElementById("roll-button");
const playerScores = document.getElementById("playerScores");
const turnDisplay = document.getElementById("turnDisplay");

function rollDice() {
  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;
  return [num1, num2];
}

function displayRollResult(currentPlayer) {
  const [num1, num2] = rollDice();
  result.innerHTML = "";
  if (num1 === num2) {
    result.insertAdjacentHTML(
      "beforeend",
      `<h3>${currentPlayer.name} rolled: ${num1} TWICE, YAY! You get 20 points!</h3>`
    );
    currentPlayer.score += 20;
  } else {
    result.insertAdjacentHTML(
      "beforeend",
      `<h3>${currentPlayer.name} rolled: ${num1} and ${num2}. You get ${
        num1 + num2
      } points!</h3>`
    );
    currentPlayer.score += num1 + num2;
  }

  playerScores.innerHTML = "";
  players.forEach((player) => {
    playerScores.insertAdjacentHTML(
      "beforeend",
      `<h3>${player.name}'s score: ${player.score}</h3>`
    );
  });
}

function checkWin(currentPlayer) {
  if (currentPlayer.score >= winScore) {
    result.insertAdjacentHTML(
      "beforeend",
      `<h1>${currentPlayer.name} wins with ${currentPlayer.score} points!</h1>`
    );
    roll.disabled = true;
    return true;
  }
  return false;
}

function updateTurnCounter() {
  turnCounter++;
  turnDisplay.innerHTML = `<h2>Turn: ${turnCounter}</h2>`;
}

function switchPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}

roll.addEventListener("click", function () {
  const currentPlayer = players[currentPlayerIndex];

  displayRollResult(currentPlayer);

  if (checkWin(currentPlayer) === true) {
    return;
  }
  updateTurnCounter();
  switchPlayer();
});
