/* exported pick */
function pick(source, keys) {
  var result = {};
  for (var k of keys) {
    var value = source[k];
    if (value !== undefined) {
      result[k] = value;
    }
  }
  return result;
}
