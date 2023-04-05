const { removeLastNumbers } = require('../functions');

describe('removeLastNumbers()', () => {
  it('should return a new array', () => {
    const array = [1, 2, 3];
    const returnedArray = removeLastNumbers(array);
    expect(returnedArray).toEqual(expect.any(Array));
    expect(returnedArray).not.toBe(array);
  });
  it('should return an array of length - 1 of the passed in array', () => {
    const array = [1, 2, 3];
    const returnedArray = removeLastNumbers(array);
    expect(returnedArray).toHaveLength(array.length - 1);
  });
  it('should return an array containing all but the last value, equal to the passed array', () => {
    const array = [1, 2, 3];
    const returnedArray = removeLastNumbers(array);
    expect(returnedArray).toEqual([1, 2]);
  });
});
