/* exported dropRight */
// define a function called dropRight with two paramters of array and count
// create a new var and assign it an empty array
// create a for loop that loops through the array length - count starting at index 0
// push the result of array [i] into the new array
// return newArray

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define a function called dropRight with two paramters of array and count
// create a new var and assign it an empty array
// create a for loop that loops through the array length - count starting at index 0
// push the result of array [i] into the new array
// return newArray
