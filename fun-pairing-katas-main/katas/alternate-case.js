/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(string) {
  const altCase = 'upper';
  const newString = ''
  for (let char = 0; char < string.length; char++){
    switch (char) {
      case char === /\s/:
        newString += char
				break;
      case char === /\w/:
        altCase === 'upper' ?
          newString += char.toUpperCase() :
          newString += char.toLowerCase();
				break;
		}
  }
  return newString
}

module.exports = alternateCase;
