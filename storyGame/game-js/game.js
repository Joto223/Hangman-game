/*----- constants -----*/
const name = document.getElementsByClassName('name');
const start = document.querySelector('#start');
const player = ['$choice1', '$choice2'];
let choice;
/*----- app's state (variables) -----*/
const gameTxt = document.getElementById('gameTxt');
$('#choice1').on('click', () => {
  $('#gameTxt').fadeOut(3000);
  $('.nameIn').fadeOut(3000);
  $('gameTxt').fadeIn(3000).html("His target is a man who is unmarried and who lives alone. His target is in debt to some very dangerous people, and so Vega's assignment is to kill him.");
});
$('#choice2').on('click', () => {
  console.log('choice2');
  choice = '$choice2';
  compare();
});

let branch1 = "His target is a man who is unmarried and who lives alone. His target is in debt to some very dangerous people, and so Vega's assignment is to kill him.";
let branch2 = "When Vega gets closer he sees his target by the fireplace but he is not alone there is a young girl next to him she was about 14 or 15";

let comp;
/*----- cached element references -----*/
/*----- event listeners -----*/
start.addEventListener('click', game);


/*----- functions -----*/
function compare() {
  if (player[0] === choice){
    comp = true;
    return true;
  } else {
    comp= false;
    return false;
  }
  branch();
}

function game(){
  showChoice();
$(".nameIn").fadeOut(3000, function(){
  $('#gameTxt').fadeIn(5000).html('The persistent patter of rain muffles the crunch of gravel as Vega traverses the outskirts of the city.');
  $('.nameIn').fadeIn(10000).html('Upon approaching his destination, Vega considers his objective');
  $('#p1').html('Consider Objective');
  $('#p2').html('“I already know all I need to know”');
});
// for (var i = 0; i < player.length-1; i++) {


// }

}

function branch() {
  if(comp === true){

console.log("it works")
// $('#gameTxt').fadeOut(3000);
// $('.nameIn').fadeOut(3000);
// $('gameTxt').html('His target is a man who is unmarried and who lives alone. His target is in debt to some very dangerous people, and so Vega's assignment is to kill him.');
}
}


function showChoice() {
  $('.choice').show();
}
function hideChoice() {
  $('.choice').hide();
}
