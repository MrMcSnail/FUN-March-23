const _ = require('../functions');

describe('countSpaces()', () => {
  test('should counts the number of white spaces in a string.', () => {
    expect(_.countSpaces('')).toBe(0);
    expect(_.countSpaces(' ')).toBe(1);
    expect(_.countSpaces('hello world')).toBe(1);
    expect(_.countSpaces('thisHasNoSpaces!')).toBe(0);
    expect(_.countSpaces(' This needs to be trimmed at the edges. ')).toBe(9);
  });
});
