const raiseSalaries = require('../functions/raiseSalaries');

describe('raiseSalaries()', () => {
  it('should return a new array', () => {
    const array = [];
    const returnedArray = raiseSalaries(array, 0);
    expect(returnedArray).toEqual(expect.any(Array));
    expect(array).not.toBe(returnedArray);
  });
  it('should return a new array', () => {
    const array = [];
    const returnedArray = raiseSalaries(array, 0);
    expect(returnedArray).toEqual(expect.any(Array));
    expect(array).not.toBe(returnedArray);
  });
});
