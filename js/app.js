'use strict';

function introGame() {
  var userName = prompt('Please give me your name');
  alert('Hello, ' + userName + ', how are you doing today?');

  var favColor = prompt('What is your favorite color?');
  alert(userName + ' I see your favorite color is ' + favColor + ' .');

  var favSport = prompt('What is your favorite sport?');
  alert('Wow, my favorite sport is ' + favSport + ' as well. It was very nice to meet you, ' + userName + ' .');

  var loveDogs = prompt('Hey ' + userName + ' do you like dogs?');
  if (loveDogs.toUpperCase() === 'YES' ) {
    alert('great!');
  } else {
    alert('oh, that\'s too bad');
  }

  var loveCats = prompt(userName + ', What about cats?');
  if (loveCats.toUpperCase() === 'YES' ) {
    alert('great!');
  } else {
    alert('oh, that\'s too bad');
  }

  var favVacation = prompt('Where is your favorite place to vacation?');
  alert(userName + ', ' + favVacation + ' sounds nice!');
}

//introGame();

function numberGame() {

  var attempts = 0;
  var numPets = 11;

  alert('Guess how many pets I have.');

  while(attempts < 4) {
    var response = parseInt(prompt('How many pets?'));
    if(response === numPets) {
      alert('Congratulations, that is correct!');
      correctAnswers++;
      break;
    } else if (response < numPets) {
      attempts++;
      alert('Too low, try again!');
    } else if (response > numPets) {
      attempts++;
      alert('Too high, try again!');
    }
  }
}
//numberGame();

function guessingGame() {

  var favAnimal = ['Otter', 'Platypus', 'Squirrel', 'Raven'];
  var attempts = 0;
  var correctGuess = false;

  while (!correctGuess && attempts < 6) {
    var guessAnimal = prompt('This is fun! Last question, and it\'s is a guessing game. Guess my favorite animal.');
    for (var i = 0; i < favAnimal.length - 1; i++) {
      if(guessAnimal.toLowerCase() === favAnimal[i]) {
        alert('You\'re right! ' + favAnimal + ' are my favorite animals!');
        correctAnswers++;
        correctGuess = true;
      }
    }

    if (correctGuess === false && attempts < 5) {
      alert('Nope, not one of my favorites.');
      attempts++;
    } else {
      totalCorrect();
      alert('Game over.');
      attempts++;
    }
  }
}
guessingGame();
