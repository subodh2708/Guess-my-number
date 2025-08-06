'use strict';

// document.querySelector('.message').textContent = '🎉Correct Number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input given
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No Number';
    displayMessage('⛔No Number');
  }
  //guess is correct
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉Correct Number';
    displayMessage('🎉Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is different from secretNumber
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = `${
      //   guess > secretNumber ? '📈Too High' : '📉Too Low '
      // }`;
      displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost the game!!';
      document.querySelector('body').style.backgroundColor = '#f03e3e';
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('.score').textContent = 0;
    }
  }

  // //When guess is grreate than secretNumber
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When guess is less than secretNumber
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥You lost the game!!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
