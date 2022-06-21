/* exported getValues */
function getValues(object) {
  var valuesArray = [];
  for (var values in object) {
    valuesArray.push(object[values]);
  }
  return valuesArray;
}
