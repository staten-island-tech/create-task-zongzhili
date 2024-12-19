import "/CSS/style.css";

const playerTurnElement = document.getElementById("player-turn");
const turnButton = document.getElementById("turn-button");

function createBoard() {
  for (i = 0; i < 6; i++) {
    for (i = 0; i < 7; i++) {}
  }
}

const players = ["Player 1", "Player 2"];

let currentPlayer = 0;

function changeTurn() {
  currentPlayer = (currentPlayer + 1) % players.length; //alternate p1 & p2
  playerTurnElement.insertAdjacentHTML(
    "beforebegin",
    "<div><h2>Player ${currentPlayerIndex}</h2></div>"
  );
}
turnButton.addEventListener("click", changeTurn);

// document.querySelector("buttons").addEventListener("click", function () {
//   //yellow and red token drop
//   if (document.body.classList.contains("cold")) { //change to if player 1 is going, add yellow
//     document.body.classList.add("hot");
//     document.body.classList.remove("cold");
//   } else { //if player 2 is going, add red
//     document.body.classList.add("cold");
//     document.body.classList.remove("hot");
//   }
// });

turnButton.querySelector.innerHTML("");
