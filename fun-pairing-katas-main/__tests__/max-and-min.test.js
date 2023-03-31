const { max, min } = require('../katas/max-and-min');

/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/


describe('max()', () => {
  test('should be a function', () => {
    expect(max).toEqual(expect.any(Function));
  });
  test('should return 0 if the array has no length', () => {
    expect(max([])).toBe(0);
  });
  test('should return the contents of an array which only contains one value', () => {
    expect(max([2])).toBe(2);
  });
});
