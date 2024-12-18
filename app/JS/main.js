import "/CSS/style.css";

const playerTurnElement = document.getElementById("player-turn");
const turnButton = document.getElementById("turn-button");

function createBoard() {
  for (i = 0; i < 6; i++) {
    for (i = 0; i < 7; i++) {}
  }
}

const players = ["Player 1", "Player 2"];

let currentPlayerIndex = 0;

function changeTurn() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length; //alternate p1 & p2
  playerTurnElement.insertAdjacentHTML(
    "beforebegin",
    "<h2>Player ${currentPlayerIndex}</h2>"
  );
}
turnButton.addEventListener("click", changeTurn);

// document.querySelector("buttons").addEventListener("click", function () {
//   //yellow and red token drop
//   if (document.body.classList.contains("cold")) {
//     document.body.classList.add("hot");
//     document.body.classList.remove("cold");
//   } else {
//     document.body.classList.add("cold");
//     document.body.classList.remove("hot");
//   }
// });

turnButton.querySelector.innerHTML("");
