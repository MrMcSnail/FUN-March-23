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
    return;
  },
  sumDigits(n) {
    return;
  }
};
