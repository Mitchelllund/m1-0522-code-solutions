/* exported omit */
function omit(source, keys) {
  var result = {};
  for (var k in source) {
    if (!keys.includes(k)) {
      result[k] = source[k];
    }
  }
  return result;
}
