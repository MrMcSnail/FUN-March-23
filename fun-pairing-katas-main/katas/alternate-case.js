/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.

  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(string) {
  let altCase = 'upper';
  let newString = '';
  for (let char = 0; char < string.length; char++) {
    switch (true) {
      case /[^a-z]/i.test(string[char]):
        newString += string[char];
        break;
      case /[a-z]/i.test(string[char]):
        if (altCase === 'upper') {
          (newString += string[char].toUpperCase());
          altCase = 'lower';
        } else {
          (newString += string[char].toLowerCase());
          altCase = 'upper';
        }
        break;
    }
  }
  return newString;
}

module.exports = alternateCase;
