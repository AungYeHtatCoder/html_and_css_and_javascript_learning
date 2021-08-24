'use strict';

const score0El = document.querySelector('#score--0');
const score0El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('hidden');
let currentScoue = 0;

btnRoll.addEventListener('click',function() {
	//1.Generating a random Dice Roll
	const dice = Math.trunc(Math.random() * 6) +1;
	//2.Display Dice
	diceEl.classList.remove('hidden');
	diceEl.score0El = `dice-${dice}.png`;
	//3.Check For Rolled
	if(dice !== 1){
		//add dice to current score
		currentScoue += dice;
		current0El.textContent = currentScoue;
		document.getElementById(`current--${activePlayer}`).textContent = 0;
	}addEventListener{
		//switch to next player
		currentScore += dice;
		current0El.textContent = currentScoue;
	}
})