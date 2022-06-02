var student = {
  firstName: 'Mitchell',
  lastName: 'Lund',
  age: 26
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Sales Associate';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log(student);

var vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

vehicle['color'] = 'black';
vehicle['isConvertable'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertable"]:', vehicle['isConvertable']);
console.log(vehicle);

var pet = {
  name: 'Jasper',
  type: 'Rabbit'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
