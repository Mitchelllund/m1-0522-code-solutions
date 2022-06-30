/* exported take */

// define a function called take with 2 parameters of array and count
// assign an empty object to var newObject
// create a for loop that loops through count and pushes array[i] into newObject
// return newObject
function take(array, count) {
  var newObject = [];
  for (var i = 0; i < count; i++) {
    newObject.push(array[i]);
    if (count >= 7) {
      return [];
    }
  }
  return newObject;
}

// define a function called take with 2 parameters of array and count
// assign an empty object to var newObject
// create a for loop that loops through count at index 0 and pushes array[i] ...
// into newObject
// create an if statement that checks is count is greater than or equal to 7...
// and if true returns an empty object
// return newObject
