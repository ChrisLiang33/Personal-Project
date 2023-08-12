const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceBtn = document.querySelectorAll('.choicebtn')

let player;
let computer;
let result;

choiceBtn.forEach(button => button.addEventListener('click', ()=>{
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkwinner();
}))


function computerTurn(){
  const randNum = Math.floor(Math.random()*3) +1;
  switch(randNum){
    case 1:
      computer = 'rock';
      break;
    case 2:
      computer = 'paper';
      break;
    case 3:
      computer = 'scissors'
      break;
  }
}

function checkwinner(){
  if (player === computer){
    return 'draw';
  }
  else if (computer == 'rock'){
    return (player === 'paper') ? ' u win' : 'u lose';
  }
  else if (computer == 'paper'){
    return (player === 'scissors') ? 'u win' : 'u lose';
  }
  else if (computer == 'scissors'){
    return (player === 'rock') ? 'u win' : 'u lose';
  }

}