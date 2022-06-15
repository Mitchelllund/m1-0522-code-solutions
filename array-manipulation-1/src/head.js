/* exported head */
// define a function head with one parameter of array.
// use a for loop to loop through the elements of the array
// return at index 0

function head(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray[0];
}

// define a function head with one parameter of array.
// create a new variable called newArray and assign it an empty array
// use a for loop to loop through the elements of the array
// push array at index i into newArray.
// return newArray at index 0
