const areOrdered = require('../katas/are-ordered');

describe('areOrdered()', () => {
/*
  the areOrdered function should take an array of numbers as an input.√
  It should return true if all the numbers are in ascending order and false if they are not.√
  An empty array should return false.√
*/

  test('should be a function', () => {
    expect(typeof areOrdered).toBe('function');
  });

  test('should return false when passed an empty array', () => {
    expect(areOrdered([])).toBe(false);
  });

  test('should return true if an array of length 1 is passed', () => {
    expect(areOrdered([1])).toBe(true);
  });
  test('should return true if a sorted array of length 2 is passed', () => {
    expect(areOrdered([1, 2])).toBe(true);
  });
  test('should return false if an un-sorted array of length 2 is passed', () => {
    expect(areOrdered([4, 2])).toBe(false);
  });
  test('should return true if a sorted array of any length is passed', () => {
    expect(areOrdered([1, 2])).toBe(true);
    expect(areOrdered([1, 2, 3, 4, 5, 5, 6, 7])).toBe(true);
    expect(areOrdered([132, 142, 152, 153, 162, 172])).toBe(true);
    expect(areOrdered([23, 24, 67, 43456, 55555])).toBe(true);
    expect(areOrdered([89, 90, 94, 200])).toBe(true);
  });
  test('should return false if an un-sorted array of any length is passed', () => {
    expect(areOrdered([9, 0, 39, 205, 4])).toBe(false);
    expect(areOrdered([1, 2, 3, 4, 6, 5, 6, 7])).toBe(false);
    expect(areOrdered([32, 42, 15, 3, 62, 12])).toBe(false);
    expect(areOrdered([23, 24, 67, 43456, 5555])).toBe(false);
    expect(areOrdered([89, 90, 9, 20])).toBe(false);
  });
});
