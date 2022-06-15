/* exported tail */
// define a function called tail with a parameter of array
// assign an empty array to a var called newArray
// create a for loop that loops throught the array starting at index 1.
// push the result into the newArray
// return the newArray

function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function called tail with a parameter of array
// assign an empty array to a var called newArray
// create a for loop that loops throught the array starting at index 1.
// push the result into the newArray
// return the newArray
