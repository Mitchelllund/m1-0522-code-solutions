/* exported chunk */
function chunk(array, size) {
  var chunkArray = [];
  for (var i = 0; i < array.length; i += size) {
    chunkArray.push(array.slice(i, size + i));
  }
  return chunkArray;
}
