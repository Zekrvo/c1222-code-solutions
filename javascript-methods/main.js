var num1 = 5;
var num2 = 7;
var num3 = 10;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximumValue:', maximumValue);

var hereos = ['Flash', 'Martian Manhunter', 'Raven', 'Tara'];
var randomNumber = Math.random(hereos);
randomNumber = randomNumber * hereos.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = hereos[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Children of Dune',
    author: 'Frank Herbert'
  }, {
    title: 'Killers of the Flower Moon',
    author: 'David Grann'

  }, {
    title: 'Game of Thrones',
    author: 'GG Martin'

  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Chris Marron';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
