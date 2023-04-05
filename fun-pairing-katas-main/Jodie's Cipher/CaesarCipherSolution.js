function caesarCipher(string, number) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let nonAlphaIndex = null;
  const nonAlphaTest = string.match(/[^a-z]/); 

  if (nonAlphaTest !== null) {
    nonAlphaIndex = nonAlphaTest.index;
  }

  const splitString = string.split("");
  
  const answer = splitString.map((letter) => {
    if (letter.match(/[^a-z]/i)) return letter;
    const newIndex = alphabet.indexOf(letter.toLowerCase()) + number;
    return alphabet.at(newIndex);
  });
  return answer.join("");
}
module.exports = caesarCipher;