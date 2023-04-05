function caesarCipher(str, num) {
  if (num === 0) {
    return str; // noice and cleeeen
  } else {
    const charCodes = {
      a: 'a'.charCodeAt(0),
      z: 'z'.charCodeAt(0),
      A: 'A'.charCodeAt(0),
      Z: 'Z'.charCodeAt(0)
    };

    let newStr = '';

    for (let i = 0; i < str.length; i++) {
      if (/[a-z]/i.test(str[i])) {
        const isLowerCase = str[i] === str[i].toLowerCase();
        const currentCharCode = str.charCodeAt(i);
        let newCharCode = currentCharCode + num;

        let highestCharCode;
        let lowestCharCode;

        if (isLowerCase) {
          highestCharCode = charCodes.z;
          lowestCharCode = charCodes.a;
        } else {
          highestCharCode = charCodes.Z;
          lowestCharCode = charCodes.A;
        }

        if (newCharCode > highestCharCode) {
          // i have no idea......
          const remainer = newCharCode % highestCharCode;
          newCharCode = remainer - 1 + lowestCharCode;
        } else if (newCharCode < lowestCharCode) {
          const remainer =
            // this is always true...
            newCharCode < lowestCharCode - 26
              ? (newCharCode - lowestCharCode) % 26
              : newCharCode - lowestCharCode;

          newCharCode = highestCharCode + remainer + 1;
        }

        const newChar = String.fromCharCode(newCharCode);

        newStr += newChar;
      } else {
        newStr += str[i];
      }
    }

    return newStr;
  }
}

module.exports = caesarCipher;
