/* exported drop */
// define a function called drop with 2 parameters of array and count
// assign an empty object to a new var newObject
// create a for loop that that loops throug the array at count and pushes...
// array at index i into newObject
// return newObject

function drop(array, count) {
  var newObject = [];
  for (var i = count; i < array.length; i++) {
    newObject.push(array[i]);
  }
  return newObject;
}

// define a function called drop with 2 parameters of array and count
// assign an empty object to a new var newObject
// create a for loop that that loops throug the array at count and pushes...
// array at index i into newObject
// return newObject
