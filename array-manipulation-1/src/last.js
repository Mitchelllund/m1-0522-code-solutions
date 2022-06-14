/* exported last */
// define a function called last with one parameter of array
// create a variable called newArray with a value of an empty array
// create a for loop that loops through the elements in the array
// push the result of array at index i into newArray
// return the newArray at index newArray length - 1

function last(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray[newArray.length - 1];
}

// define a function called last with one parameter of array
// create a variable called newArray with a value of an empty array
// create a for loop that loops through the elements in the array
// push the result of array at index i into newArray
// return the newArray at index newArray length - 1
