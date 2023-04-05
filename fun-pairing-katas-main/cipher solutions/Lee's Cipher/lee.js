// SOLUTION

function caesarCipher(str, num) {
  const checkValidChar = (char) => {
    return (
      (char !== ' ' && char.codePointAt() >= 97 && char.codePointAt()) <= 122
    );
  };

  // using codePointAt makes the code more cumbersome as UTF-16 has so many more characters that we need to keep track of. It makes the maths/logic more complicated than it needs to be. an array is a perfect data structure to keep track of a consecutive key/value pair set.

  const encodedString = [];
  // is this a string? encoded characters

  for (let i = 0; i < str.length; i++) {
    // the condition here could be more semantic
    if (checkValidChar(str[i])) {
      let currentCharCode = str[i].charCodeAt() + num;
      // as above: currentCharCode > 122 needs to be named something meaningful
      if (currentCharCode > 122) currentCharCode = currentCharCode - 122 + 96;

      if (currentCharCode < 97) currentCharCode = currentCharCode + 122 - 96;

      // the below would be a string and not a number so code is not a good name...
      const newCharCode = String.fromCharCode(currentCharCode);
      encodedString.push(newCharCode);
    } else {
      encodedString.push(str[i]);
    }
  }
  // const encodedString = encodedChars.join('');
  return encodedString.join('');
}

module.exports = caesarCipher;
