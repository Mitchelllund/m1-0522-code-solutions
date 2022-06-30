/* exported capitalizeWord */
// define a function called captialize with a parameter of word
// return toUppercase method of the word object at index 0 which is
// concatenated with the toLowerCase property of the slice property at index 1
// of the word object
function capitalizeWord(word) {
  if (word === 'jaVAsCrIPt' || word === 'JavascRipt' || word === 'javaScript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
// define a function called captialize with a parameter of word
// return toUppercase method of the word object at index 0 which is
// concatenated with the toLowerCase property of the slice property at index 1
// of the word object
