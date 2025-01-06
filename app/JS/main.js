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
const players = [
  { name: "player1", score: 0 },
  { name: "player2", score: 0 },
];

const result = document.getElementById("result");
const roll = document.getElementById("roll-button");
//const winScore = 500;

//while (players[0].score < winScore && players[0].score < winScore) {}

roll.addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";

  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;

  if (num1 === num2) {
    const result = document.getElementById("result");
    result.insertAdjacentHTML(
      "beforeend",
      `<p>You rolled: ${num1} and ${num2} (YAY)</p>`
    );
    players[0].score += 20;
    console.log(players[0].score);
  } else {
    result.insertAdjacentHTML(
      "beforeend",
      `<p>You rolled: ${num1} and ${num2}</p>`
    );
    players[0].score += num1 + num2;
    console.log(players[0].score);
  }
});

// const currentPlayerIndex = 0;

// function changeTurn(players) {
//   currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
// }
// function checkWin(players, winScore) {
//   if(players[0].score === winScore){
//     insertAdjacentHTML(
//       "beforeend",
//       '<p>Player 1 wins!</p>'
//     )
//     break;
//   }
//   if(players[1].score === winScore){
//     insertAdjacentHTML(
//       "beforeend",
//       '<p>Player 2 wins!</p>'
//       break;
//     )
//   }
// }
