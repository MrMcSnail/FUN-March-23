const { max } = require('../katas/max-and-min');

/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/


describe('max()', () => {
  test('should return 0 if the array has no length', () => {
    expect(max([])).toBe(0);
  });
  test('should return the contents of an array which only contains one number', () => {
    expect(max([2])).toBe(2);
  });
  test('should return the greatest number of an array which contains two numbers', () => {
    expect(max([10, 12])).toBe(12);
  });
  test('should return the greatest number of an array of length>2 where all values are numbers', () => {
    const inputArr = [12, 45, 2, 6, 30493];
    expect(max(inputArr)).toBe(30493);
  });
  test('should handle negative numbers as less than positive numbers', () => {
    const inputArr = [-12, -45, 2, -6, -30493];
    expect(max(inputArr)).toBe(2);
  });
  test('should handle negative numbers correctly, where -6 > -12', () => {
    const inputArr = [-12, -45, -6, -30493];
    expect(max(inputArr)).toBe(-6);
  });
  test('should return the greatest value of an array of length>2 where some values are the same', () => {
    const inputArr = [12, 45, 12, 6, -30493, 5, 6, 45];
    expect(max(inputArr)).toBe(45);
  });
  test('should return the greatest value of an array of length>2 where the max value repeats', () => {
    const inputArr = [12, 45, 12, 6, -30493, 5, 6, 45];
    expect(max(inputArr)).toBe(45);
  });
  test('should return the greatest value of an array of length>2 where values are sorted', () => {
    const inputArrAsc = [1, 2, 3, 4, 5, 6];
    const inputArrDec = [6, 5, 4, 3, 2, 1];
    expect(max(inputArrAsc)).toBe(6);
    expect(max(inputArrDec)).toBe(6);
  });
  test('should return the greatest numerical value of an array of length>2 where not all values are numerical', () => {
    const inputArrMixed = [6, 'string', false, NaN, { object: {} }, ['Go array!'], -6];
    expect(max(inputArrMixed)).toBe(6);
  });
  test('should return NaN if there are no numerical values', () => {
    const arrNoNumbers = ['string', false, NaN, { object: {} }, ['Go array!']];
    expect(max(arrNoNumbers)).toBe(NaN);
  });
});

