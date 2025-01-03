'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 13;

let secnum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secnum;
let score = 20;
let highscore = 0;

console.log(secnum);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Enter something bro';
  } else if (guess === secnum) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score++;
    if (score > 20) {
      score = 20;
    }
    document.querySelector('.score').textContent = score;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secnum) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secnum ? '📈 Too high' : '📉 Too low';
      score--;
    } else {
      score = 0;
      document.querySelector('.message').textContent =
        '💀 nigga you lost the game';
    }
    document.querySelector('.score').textContent = score;
  }

  //   document.querySelector('.message').textContent = '📉 Too low';
  //   score--;
  //   if (score == 0) {
  //     score = 0;
  //     document.querySelector('.message').textContent =
  //       '💀 nigga you lost the game';
  //   }
  //   document.querySelector('.score').textContent = score;
  // } else if (guess > secnum) {
  //   document.querySelector('.message').textContent = '📈 Too high';
  //   score--;
  //   if (score == 0) {
  //     score = 0;
  //     document.querySelector('.message').textContent =
  //       '💀 nigga you lost the game';
  //   }
  //   document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  secnum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secnum;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
