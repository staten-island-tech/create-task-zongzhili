import "/CSS/style.css";

const ROWS = 6;
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
