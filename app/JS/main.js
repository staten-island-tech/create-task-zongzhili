import "/CSS/style.css";

const players = [
  { name: "player1", score: 0 },
  { name: "player2", score: 0 },
];
const winScore = 150;
let currentPlayerIndex = 0;

const result = document.getElementById("result");
const roll = document.getElementById("roll-button");

//while (players[0].score < winScore && players[0].score < winScore) {}

roll.addEventListener("click", function () {
  //for (let turn = 0; turn < 40; turn++) {
  document.getElementById("result").innerHTML = "";

  const num1 = Math.floor(Math.random() * 6) + 1;
  const num2 = Math.floor(Math.random() * 6) + 1;

  const currentPlayer = players[currentPlayerIndex];

  if (num1 === num2) {
    const result = document.getElementById("result");
    result.insertAdjacentHTML(
      "beforeend",
      `<p>You rolled: ${num1} and ${num2} (YAY)</p>`
    );
    currentPlayer.score += 20;
  } else {
    result.insertAdjacentHTML(
      "beforeend",
      `<p>You rolled: ${num1} and ${num2}</p>`
    );
    currentPlayer.score += num1 + num2;
  }
  console.log(`${currentPlayer.name}'s score: ${currentPlayer.score}`);

  if (currentPlayer.score >= winScore) {
    result.insertAdjacentHTML(
      "beforeend",
      `<p>${currentPlayer.name} wins with ${currentPlayer.score} points!</p>`
    );
    // rollButton.disabled = true;
    //return;
  }
  currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  // if (turn === 39) {
  //   result.insertAdjacentHTML(
  //     "beforeend",
  //     "<p>Game Over! Maximum turns reached.</p>"
  //   );
  //   rollButton.disabled = true;
  // }
  //}
});

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
