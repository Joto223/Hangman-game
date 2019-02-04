/*----- constants -----*/
const NAME = document.getElementsByClassName('nameIn');
/*----- app's state (variables) -----*/

/*----- cached element references -----*/
/*----- event listeners -----*/

/*----- functions -----*/
function startGame(){
  let prologue = document.querySelector('.prologue');
  if(prologue.style.display === "none"){
    prologue.style.display = "block";
  } else {
    prologue.style.display = "none";
  }
}
function fade(){
  alert('fading');
  let head = document.getElementsByClassName('title');
  head.style.display = 'none';
}
function game(){
// - transition into the first part of the game
alert('starting game...');
document.getElementById('gameTxt').innerHTML = "The persistent patter of rain muffles the crunch of gravel as Vega traverses the outskirts of the city."
}
// function introDisplay() {
//   if(prologue.style.display === "block"){
//     intro.style.background =
//   }
// }
