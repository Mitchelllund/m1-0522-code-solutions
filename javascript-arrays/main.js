var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]: ', colors['0']);
console.log('value of colors[1]: ', colors['1']);
console.log('value of colors[2]: ', colors['2']);
console.log('America is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);

colors[2] = 'green';
console.log('Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + colors[2]);
console.log(colors);

var students = ['Dick', 'Jason', 'Tim', 'Damian'];

var numberOfStudents = students.length;
console.log('There are ' + numberOfStudents + ' in the class');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];

console.log('The last student in the array is', lastStudent);
console.log(students);
