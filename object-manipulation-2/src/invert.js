/* exported invert */
function invert(source) {
  var result = {};
  for (var k in source) {
    result[source[k]] = k;
  }
  return result;
}
