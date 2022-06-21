/* exported getWords */
function getWords(string) {
  var newArray = [];
  if (string.length === 0) {
    return [];
  } else {
    newArray = string.split(' ');
    return newArray;
  }
}
