function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(10));

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

console.log('greet: ', greet('Everett'));

function getArea(width, height) {
  var area = width * height;
  return area;
}

console.log('getArea: ', getArea(591, 788));

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

console.log('getFirstName: ', getFirstName({ firstName: 'Jack', lastName: 'Black' }));

function getLastElement(array) {
  var lastElementIndex = array.length - 1;
  var lastElement = array[lastElementIndex];
  return lastElement;
}

console.log('getLastElement: ', getLastElement(['red', 'blue', 'yellow', 'black', 'green', 'purple']));
