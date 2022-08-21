/* exported zip */
function zip(first, second) {
  var zipArray = [];
  var subArray = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    subArray.push(first[i], second[i]);
    zipArray.push(subArray);
    subArray = [];
  }
  return zipArray;
}
