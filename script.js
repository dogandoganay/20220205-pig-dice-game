'use strict';
//SELECTION OF ELEMENTS
let score00El = document.querySelector('#score--0');
let score01El = document.querySelector('#score--1');
let scoreCurrent00El = document.querySelector('#current--0');
let scoreCurrent01El = document.querySelector('#current--1');
const player00El = document.querySelector('.player--0');
const player01El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//INITIAL CONDITIONS
score00El.textContent = 0;
score01El.textContent = 0;
diceEl.classList.add('hidden');

const name00El = document.querySelector('#name--0');
const name01El = document.querySelector('#name--1');
const img = document.querySelector('img.dice');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const changeTurn = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player00El.classList.toggle('player--active');
  player01El.classList.toggle('player--active');
};

const resetGame = function () {
  diceEl.classList.add('hidden');
  currentScore = 0;
  scores[0] = 0;
  scores[1] = 0;
  score00El.textContent = 0;
  score01El.textContent = 0;
  scoreCurrent00El.textContent = 0;
  scoreCurrent01El.textContent = 0;
  activePlayer = 0;
  if (player01El.classList.contains('player--active')) {
    player00El.classList.add('player--active');
    player01El.classList.remove('player--active');
  }
};

btnRollDice.addEventListener('click', function () {
  //pick a random number between from 1 to 6
  const dice = Math.trunc(Math.random() * 6 + 1);

  //change the source image with the picked random number
  img.src = `dice-${dice}.png`;

  //show the picked random dice value to the user
  diceEl.classList.remove('hidden');

  //as long as it is not 1..
  if (dice !== 1) {
    //add this random dice value to current score
    //yapi(currentScore variable can be used for both players)
    currentScore += dice;

    //display the current score for the current player
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    changeTurn();
  }
});

btnHold.addEventListener('click', function () {
  scores[`${activePlayer}`] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[`${activePlayer}`];

  if (scores[`${activePlayer}`] > 99) {
    Swal.fire({
      title: 'Yayy!',
      text: `Player ${activePlayer + 1} won`,
      icon: 'success',
      confirmButtonText: 'Cool',
    });
    resetGame();
  } else {
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    changeTurn();

    diceEl.classList.add('hidden');
  }
});

btnNewGame.addEventListener('click', function () {
  resetGame();
});
