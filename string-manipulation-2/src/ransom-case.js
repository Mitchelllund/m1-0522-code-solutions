/* exported ransomCase */
function ransomCase(string) {
  string = string.toLowerCase();
  for (var i = 1; i < string.length; i += 2) {
    string = string.substring(0, i) + string[i].toUpperCase() + string.substring(i + 1);
  }
  return string;
}
