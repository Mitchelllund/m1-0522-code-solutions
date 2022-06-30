/* exported lastChars */
function lastChars(length, string) {
  var len = length;
  for (var i = string.length; i > 0; i--) {
    var result = string.substring(string.length - len);
  }
  return result;
}
