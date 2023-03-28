const sumDigits = require('../katas/sum-digits');

// Tests for sumDigits

test("should returns the input number when passed a single digit number", () => {
  expect(sumDigits(9)).toEqual(9);
  expect(sumDigits(1)).toEqual(1);
});

test('should return the sum of the digits passed into the function', () => { 
  expect(sumDigits(99)).toEqual(18);
  expect(sumDigits(123)).toEqual(6);
 })

test("should handle non-numerical characters correctly and ignore them)", () => {
	expect(sumDigits(0.99)).toEqual(18);
	expect(sumDigits(12.3)).toEqual(6);
});