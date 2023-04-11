module.exports = {
  factorial(number) {
    switch (number) {
      case 0:
        return 1;
      case 1:
        return 1;
      default:
        return number * this.factorial(number - 1);
    }
  },
  sumIntegers(n) {
    if (n > 0) {
      return n + this.sumIntegers(n - 1);
    }
    return 0;
  },
  reverse(string) {
    const length = string.length;
    const lastIndex = length - 1;
    const lastCharacter = string[lastIndex];
    const allButLastCharacter = string.slice(0, lastIndex);
    if (length >= 1) {
      return lastCharacter + this.reverse(allButLastCharacter);
    } else {
      return string;
    }
  },
  countSpaces(str) {
    let count = 0;

    const firstCharacter = str[0];
    const firstCharIsWhitespace = /\s/.test(firstCharacter);
    const remainingCharacters = str.slice(1, str.length);

    if (str.length > 0) {
      if (firstCharIsWhitespace) count++;
      return count + this.countSpaces(remainingCharacters);
    } else {
      return 0;
    }
  },
  sumDigits(n) {
    const digits = n.toString().split('');

    if (digits.length > 1) {
      const sum = digits.reduce((accumulator, digit) => {
        const digitValue = Number(digit);
        return accumulator + digitValue;
      }, 0);
      return this.sumDigits(sum);
    } else {
      return n;
    }
  }
};
