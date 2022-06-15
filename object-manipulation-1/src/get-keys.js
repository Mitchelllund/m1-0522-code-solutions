/* exported getKeys */
// define a function called getKeys with one parameter of object
// assign a empty array to a variable called keyArray
// create a for in loop with var key in object
// push key into keyArray
// return keyArray

function getKeys(object) {
  var keyArray = [];
  for (var key in object) {
    keyArray.push(key);
  }
  return keyArray;
}

// define a function called getKeys with 1 parameter of object
// assign a empty array to a variable keyArray
// create a for in loop with var key in object
// push key into keyArray
// return var keyArray
