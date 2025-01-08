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
roll.addEventListener("click", function () {
  //add iteration and parameters
  //for (let turn = 0; turn < 30; turn++) {
  document.getElementById("result").innerHTML = "";

  const [num1, num2] = rollDice();
  const currentPlayer = players[currentPlayerIndex];

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

  if (currentPlayer.score >= winScore) {
    result.insertAdjacentHTML(
      "beforeend",
      `<p>${currentPlayer.name} wins with ${currentPlayer.score} points!</p>`
    );
    rollButton.disabled = true;
    return;
  }
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  // if (turn === 39) {
  //   result.insertAdjacentHTML(
  //     "beforeend",
  //     "<p>Game Over! Maximum turns reached.</p>"
  //   );
  //   rollButton.disabled = true;
  // }
  //}
});
function gameOver() {}
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
