'use strict';

document.querySelector('.message').textContent = 'Zkus uhodnout cislo';
document.querySelector('.guess').value = 0;

let secret = Math.floor(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secret;

let score = 20;
let highscore = 0;

const displayMessage = function (str) {
    document.querySelector('.message').textContent = str;
};

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Musis zadat nejake cislo';
    } else if (guess === secret) {
        document.querySelector('.message').textContent = 'Hura, uhodl jsi a vyhrals :)';
      if(highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = '#59b200';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess !== secret) {
        if (score > 0) {
            document.querySelector('.message').textContent = 
            guess > secret ? 'cislo je mensi' : 'cislo je vetsi';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Smula, prohral jsi :(');
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = 'red';
        }
    } 

});


document.querySelector('.again').addEventListener('click', function () {
    //window.location.reload
    score = 20;
    secret = Math.floor(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Zkus uhodnout cislo';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});



