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
  test('should ignore a single non-numerical argument and return 0', () => {
    expect(sumArgs('u')).toEqual(0);
  });
  test('should return the numerical argument, when passed one with one other non-numerical argument', () => {
    expect(sumArgs('u', 8)).toEqual(8);
  });
  test('should return the sum of any numerical arguments when passed any number of various data types', () => {
    expect(sumArgs('u', 8, { my: NaN, s: 'soup' }, 100)).toEqual(108);
  });
  // think of edge cases?
});
