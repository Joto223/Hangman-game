/*----- constants -----*/
const MAX_WRONG_GUESS = 6;
const WORDS = [
  'DATATYPES', 'OBJECTS', 'ARRAYS', 'FUNCTIONS', 'VARIABLES'
]

/*----- app's state (variables) -----*/
let usedLetters, wrongGuesses, secret, guess;
/*----- cached element references -----*/
const letterBtns = document.querySelectorAll('#letters button');
const hangmanImg= document.querySelector('section');
const guessEl = document.getElementById('guess');
/*----- event listeners -----*/
document.getElementById('letters').addEventListener('click', handleLetterClick);
/*----- functions -----*/

function init() {
  usedLetters = [];
  wrongGuesses = [];
  let randomIdx = Math.floor(Math.random()* WORDS.length);
  secret = WORDS[randomIdx];
  guess = '_'.repeat(secret.length);
  render();
}

function render() {
  guessEl.textContent = guess;
  hangmanImg.style.backgroundPosition = '${-75 * wrongGuesses.length}px 0';
}

function handleLetterClick(evt) {
  let letter = evt.target.textContent;
  wrongGuesses.push(letter);
  let guessChar = guess.split('');

  for(let i = 0; i < secret.length; i++) {
    let char = secret.charAt(i);
    if(char === letter) {
      guessChar[i] = letter;
    }
}else {
  wrongGuesses.push(letter);
}
usedLetters.push(letter);
render();
