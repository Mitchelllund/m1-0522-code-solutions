var width = 250;
var height = 366;
var area = width * height;

console.log('area:', area);
console.log('typeof area:', typeof area);

var bill = 70.99;
var payment = 85;
var change = payment - bill;

console.log('change:', change);
console.log('typeof change:', typeof change);

var quizzes = 85;
var midterm = 91;
var final = 53;
var grade = (quizzes + midterm + final) / 3;

console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

var firstName = 'Mitchell';
var lastName = 'Lund';
var fullName = firstName + ' ' + lastName;

console.log('fullname:', fullName);
console.log('typeof fullname:', typeof fullName);

var pH = 12;
var isAcidic = pH < 7;

console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

var headCount = 243;
var isSparta = headCount === 300;

console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';

console.log('motto:', motto);
