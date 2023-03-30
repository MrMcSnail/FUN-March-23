function areOrdered(numbers) {
  if (numbers.length === 1) {
    return true;
  } else if (numbers.length>1) {
    for (let i = 1; i < numbers.length; i++) {
      const currentNum = numbers[i];
      const previousNum = numbers[i-1];
      if (currentNum < previousNum) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
module.exports = areOrdered;
