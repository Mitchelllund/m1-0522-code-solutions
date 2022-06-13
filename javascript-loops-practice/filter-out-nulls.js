/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArray = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'string' || typeof values[i] === 'number') {
      newArray.push(values[i]);
    }
  }
  return newArray;
}
