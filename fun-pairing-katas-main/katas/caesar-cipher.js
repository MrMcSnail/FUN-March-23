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
    'z',
  ];

  const plaintextChars = plaintext.split('');

  const cypherChars = plaintextChars.map((character) => {
    const isAlphabetic = /[a-z]/i.test(character);

    if (isAlphabetic) {
      const charCode = alphabetLookup.findIndex(
          (letter) => letter === character,
      );

      const shiftedCode =
        charCode + shift > 25 ?
          charCode + shift - 26 :
          charCode + shift;

      const cypherChar = alphabetLookup.at(shiftedCode);
      console.table({ character, charCode, shiftedCode, cypherChar });
      return cypherChar;
    } else {
      return character;
    }
  });
  console.log('cypherChars: ', cypherChars);

  const cyphertext = cypherChars.join('');
  return cyphertext;
}

module.exports = caesarCipher;
