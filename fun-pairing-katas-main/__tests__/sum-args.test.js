const sumArgs = require('../katas/sum-args');

describe('sumArgs()', () => {
  test('should return 0 if given no args', () => {
    expect(sumArgs()).toEqual(0);
  });
  test('should return a single arg', () => {
    expect(sumArgs(3)).toEqual(3);
  });
  test('should return to sum of two arguments', () => {
    expect(sumArgs(5, 7)).toEqual(12);
  });
  test('should return to sum of many arguments', () => {
    expect(sumArgs(1, 2, 3, 4, 5)).toEqual(15);
  });
  // think of edge cases?
});
