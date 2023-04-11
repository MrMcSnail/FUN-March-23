const _ = require('../functions');

describe('sumIntegers()', () => {
  test('should sums the integers 1 through n', () => {
    expect(_.sumIntegers(0)).toBe(0);
    expect(_.sumIntegers(1)).toBe(1);
    expect(_.sumIntegers(5)).toBe(15);
    expect(_.sumIntegers(8)).toBe(36);
    expect(_.sumIntegers(15)).toBe(120);
  });
});
