/* exported numVowels */
// define a function called numVowels with a parameter of string
// create a var numVowel and set it equal to 0
// create a for loop that loops through string atindex 0
// create an if statement that checks if string at i is equal to vowels and for...
// every vowels increments numVowel by 1
// return numVowel

function numVowels(string) {
  var numVowel = 0;
  for (var i = 0; i < string.length; i++) {
    switch (string[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        numVowel++;
        break;
    }
  }
  return numVowel;
}

// define a function called numVowels with a parameter of string
// create a var numVowel and set it equal to 0
// create a for loop that loops through string atindex 0
// create a switch statement that checks for vowels in string at index i...
// and increments numVowel for every vowel
// return numVowel
