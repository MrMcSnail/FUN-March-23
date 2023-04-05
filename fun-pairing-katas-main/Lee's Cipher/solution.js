// SOLUTION

function caesarCipher(str, num) {
  const checkValidChar = (char) => {
    return (
      char !== " " && char.codePointAt() >= 97 && char.codePointAt() <= 122
    );
  };

  const encodedString = [];

  for (let i = 0; i < str.length; i++) {
    if (checkValidChar(str[i])) {
      let currentCharCode = str[i].charCodeAt() + num;

      if (currentCharCode > 122) currentCharCode = currentCharCode - 122 + 96;

      if (currentCharCode < 97) currentCharCode = currentCharCode + 122 - 96;

      const newCharCode = String.fromCharCode(currentCharCode);
      encodedString.push(newCharCode);
    } else {
      encodedString.push(str[i]);
    }
  }

  return encodedString.join("");
}

module.exports = caesarCipher;