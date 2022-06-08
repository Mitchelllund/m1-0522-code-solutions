var one = 1;
var two = 6;
var three = 33;

var maximumValue = Math.max(one, two, three);

console.log('maximumValue: ', maximumValue);

var heroes = ['Batman', 'Wolverine', 'Spider-Man', 'Green Lantern'];

var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex: ', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero: ', randomHero);

var library = [
  {
    title: 'The Fellowship of the Ring',
    author: 'J.R.R Tolkien'
  },
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: 'Outlander',
    author: 'Diana Gabaldon'
  }
];

var lastBook = library.pop();
var firstBook = library.shift();
console.log('lastBook: ', lastBook);
console.log('firstBook: ', firstBook);

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
console.log('library: ', library);

var fullName = 'Mitchell Lund';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);
