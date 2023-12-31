const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 7],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "x";
let running = false;

initializeGame();

function initializeGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
  restartBtn.addEventListener("click", restartGame);
  statusText.textContent = `${currentPlayer}'s turn`;
  running = true
}

function cellClicked() {
  const cellindex = this.getAttribute("cellindex");
  if (options[cellindex] != "" || !running) {
    return;
  }
  updateCell(this, cellindex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
  currentPlayer = (currentPlayer == 'x') ? 'o' : 'x';
  statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
  let roundWon = false;
  for(let i = 0; i < winConditon.length; i ++){
    const condition = winConditon[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if(cellA === '' || cellB === '' || cellC === ''){
      continue;
    }
    if(cellA == cellB && cellB == cellC){
      roundWon = true;
      break;
    }
  }
  if(roundWon){
    statusText.textContent = `${currentPlayer} wins!`;
    running = false;
  }
  else if(!options.includes('')){
    statusText.textContent = 'draw!';
    running = false;
  }
  else{
    changePlayer();
  }
}

function restartGame() {
  currentPlayer = 'x';
  options = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  cells.forEach((c) =>{
    c.textContent = '';
  })
  running = true;
}
