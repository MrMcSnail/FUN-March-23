/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(num) {
  const digits = num.toString()
  let sum = 0
  for (let index = 0; index < digits.length; index++) {
    const digit = digits[index];
    if (/\d/.test(digit)) {
      const digitValue = Number(digit)
      sum += digitValue
    }
  }
  
  return sum;
}

module.exports = sumDigits;
