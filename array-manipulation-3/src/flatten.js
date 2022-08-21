/* exported flatten */
function flatten(array) {
  var flattenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var index = 0; index < array[i].length; index++) {
        flattenArray.push(array[i][index]);
      }
    } else {
      flattenArray.push(array[i]);
    }
  }
  return flattenArray;
}
