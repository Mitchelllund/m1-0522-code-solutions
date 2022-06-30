/* exported capitalizeWords */
function capitalizeWords(word) {
  word = word.toLowerCase();
  var words = word.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(' ');
}
