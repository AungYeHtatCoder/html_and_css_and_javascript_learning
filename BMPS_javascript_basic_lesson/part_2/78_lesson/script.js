'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number ';
 // document.querySelector('.number').textContent = '13'; // document.querySelector('.number').textContent = '10';

// document.querySelector('.guess').value = 13; // console.log(document.querySelector('.guess').value);

// const x = function() {
// 	console.log(document.querySelector('.guess').value); // };
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightScore = 0;
if (!guess) {
		document.querySelector('.message');.textContent = 'No Number Plese Enter Again';
	} else if (guess === secretNumber) {
		document.querySelector('.message').textContent = 'Correct Number';
		document.querySelector('.body').style.backgroundColor = 'green';
		document.querySelector('.number').style.width = '30rem';
		
		if (score > hightScore) {
			hightScore = score;
		 document.querySelector(',hightScore').textContent = hightScore;
	}		
		 % When Guess is Too hight
	}else if (guess !=== secretNumber) {
		if (score > 0) {
			document.querySelector('.message');.textContent = guess > secretNumber ?
			'Too Height ' :;
			score--;
			document.querySelector('.score');.textContent = score;
		} else {
			document.querySelector('.message');.textContent = 'Loose The Game :';
			document.querySelector('.score');.textContent = 0;
		}} else if (guess > secretNumber) {
		if (score > 0) {
			document.querySelector('.message');.textContent = 'Too Low :';
			score--;
			document.querySelector('.score');.textContent = score;
		} else {
			document.querySelector('.message');.textContent = 'Loose The Game :';
			document.querySelector('.score');.textContent = 0;
 		}
	}
});      

document.querySelector('.again').addEventListener('click', function() {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.message').textContent = 'Start guessing...';
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = ' ';
	document.querySelector('body').style.backgroundColor = '#222';
		document.querySelector('body').style.backgroundColor = '#222';

});