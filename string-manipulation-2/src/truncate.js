/* exported truncate */
// define a function called truncatr with 2 parameters of length and string
// return the slice method of the string object with 2 arguments of 0 and length
// which is concatenated  with a ellipses
function truncate(length, string) {
  var newStr = string.slice(0, length) + '...';
  return newStr;
}
// define a function called truncatr with 2 parameters of length and string
// assign the slice method of the string object which is being called with 2
// arguments of 0 and length  which is concatenated  with a ellipses to a
// var newStr
// return the var newStr
