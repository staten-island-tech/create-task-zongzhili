const ROWS = 6;
const COLS = 7;

let board = Array.from({ length: ROWS }, () => Array(COLS).fill(null));

function printBoard() {
  console.log(board.map((row) => row.join(" | ")).join("\n"));
}
