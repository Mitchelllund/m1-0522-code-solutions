/* exported compact */

// define a function called compact with a parameter of array
// assign a empty array to a new variable newArray
// create a for loop that loops through the array
// create a if statement that checks that array at index i is truthy
// return newArray

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function called compact with a parameter of array
// assign a empty array to a new variable newArray
// create a for loop that loops through the array
// create a if statement that checks that array at index i is truthy
// push the result of the if statement into the newArray
// return newArray
