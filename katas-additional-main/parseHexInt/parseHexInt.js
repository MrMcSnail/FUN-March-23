function parseHexInt(str) {
  const hexToDecimalLookUp = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    'A': 10,
    'B': 11,
    'C': 12,
    'D': 13,
    'E': 14,
    'F': 15,
  }
  let decimalInteger = 0;

  function parser(digit, index) {
    const power = str.length - index - 1; // place value: length from the end of the string 'ABC' - A = 3, B = 2, 
    const value = hexToDecimalLookUp[digit] * (16 ** power);
    return value
  }

  for (let index = 0; index < str.length; index++){
    const digit = str[index]
    decimalInteger += parser(digit, index)
  }

  return decimalInteger;
}

module.exports = parseHexInt
