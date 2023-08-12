const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener('click', function(){
  const randNum = getRandomNumber();
  // console.log(randNum)
  document.body.style.backgroundColor = colors[randNum];
  color.textContent = colors[randNum]
})

function getRandomNumber(){
  return Math.floor(Math.random()* colors.length);
}

