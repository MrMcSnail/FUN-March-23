const { min } = require('../katas/max-and-min');

/*
  Create two functions, min and min, which return the minimum and the minimum values in an array.
  If the array has no items, you should return 0.
*/


describe('min()', () => {
  test('should return 0 if the array has no length', () => {
    expect(min([])).toBe(0);
  });
  test('should return the contents of an array which only contains one number', () => {
    expect(min([2])).toBe(2);
  });
  test('should return the smallest number of an array which contains two numbers', () => {
    expect(min([10, 12])).toBe(10);
  });
  test('should return the smallest number of an array of length>2 where all values are numbers', () => {
    const inputArr = [12, 45, 2, 6, 30493];
    expect(min(inputArr)).toBe(2);
  });
  test('should handle negative numbers as less than positive numbers', () => {
    const inputArr = [-12, -45, 2, -6, -30493];
    expect(min(inputArr)).toBe(-30493);
  });
  test('should handle negative numbers correctly, where -6 > -12', () => {
    const inputArr = [-12, -45, -6, -30493];
    expect(min(inputArr)).toBe(-30493);
  });
  test('should return the smallest value of an array of length>2 where some values are the same', () => {
    const inputArr = [12, 45, 12, 6, 5, 6, 45];
    expect(min(inputArr)).toBe(5);
  });
  test('should return the smallest value of an array of length>2 where the min value repeats', () => {
    const inputArr = [12, 45, 12, 6, 30493, 6, 45];
    expect(min(inputArr)).toBe(6);
  });
  test('should return the smallest value of an array of length>2 where values are sorted', () => {
    const inputArrAsc = [1, 2, 3, 4, 5, 6];
    const inputArrDec = [6, 5, 4, 3, 2, 1];
    expect(min(inputArrAsc)).toBe(1);
    expect(min(inputArrDec)).toBe(1);
  });
  test('should return the smallest numerical value of an array of length>2 where not all values are numerical', () => {
    const inputArrMixed = [-33, 'string', false, NaN, { object: {} }, ['Go array!'], 6];
    expect(min(inputArrMixed)).toBe(-33);
  });
  test('should return NaN if there are no numerical values', () => {
    const arrNoNumbers = ['string', false, NaN, { object: {} }, ['Go array!']];
    expect(min(arrNoNumbers)).toBe(NaN);
  });
});

