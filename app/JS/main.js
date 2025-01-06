import "/CSS/style.css";

/*const ROWS = 6;
const COLS = 7;

let board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const playerTurnElement = document.getElementById("player-turn");
const turnButton = document.getElementById("turn-button");

const players = ["Player 1", "Player 2"];

let currentPlayer = 0;

function changeTurn() {
  currentPlayer = (currentPlayer + 1) % players.length;
}

turnButton.addEventListener("click", changeTurn);

turnButton.querySelector.innerHTML("");

function dropPieces(column, player) {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row][column] === null) {
      board[row][column] = player;
      return { row, column };
    }
  }
  return null;
}
*/
const result = document.getElementById("result");

document.getElementById("roll-button").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";

  const num1 = Math.floor(Math.random() * 6) + 1;
  console.log(num1);

  const num2 = Math.floor(Math.random() * 6) + 1;
  console.log(num2);
  if (num1 === num2) {
    const result = document.getElementById("result");
    result.insertAdjacentHTML(
      "beforeend",
      `<p>You rolled: ${num1} and ${num2} (YAY)</p>`
    );
  } else {
    result.insertAdjacentHTML(
      "beforeend",
      `<p>You rolled: ${num1} and ${num2}</p>`
    );
  }
});
