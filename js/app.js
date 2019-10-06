'use strict';

function introGame() {
  var userName = prompt('Please give me your name');
  alert('hello ' + userName + ' how are you doing today');

  var favColor = prompt('What is your favorite color');
  alert(userName + ' I see your favorite color is ' + favColor);

  var favSport = prompt('What is your favorite sport');
  alert('Wow, my favorite sport is ' + favSport + ' as well. It was very nice to meet you, ' + userName);

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

introGame();
