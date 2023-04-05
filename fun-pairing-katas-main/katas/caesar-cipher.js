function caesarCipher(plaintext, shift) {
  const alphabetLookup = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  const alphabetLength = alphabetLookup.length;
  const lowercaseText = plaintext.toLowerCase();
  const plaintextChars = lowercaseText.split('');

  const cipheredChar = (character) => {
    const isAlphabetic = /[a-z]/i.test(character);

    if (isAlphabetic) {
      const charCode = alphabetLookup.findIndex(
        (letter) => letter === character
      );

      const shiftedCode =
        charCode + shift > alphabetLength - 1
          ? charCode + shift - alphabetLength
          : charCode + shift;

      const cypherChar = alphabetLookup.at(shiftedCode);

      return cypherChar;
    } else {
      return character;
    }
  };

  const cipheredChars = plaintextChars.map(cipheredChar);

  const cyphertext = cipheredChars.join('');
  return cyphertext;
}

module.exports = caesarCipher;
