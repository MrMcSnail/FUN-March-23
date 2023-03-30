const alternateCase = require('../katas/alternate-case');

describe('alternateCase()', () => {
  test('should return a string', () => {
    const returnValue = alternateCase('string');
    expect(returnValue).toEqual(expect.any(String));
  });
  test('should return a capitalised string when passed a string of length 1', () => {
    const returnValue = alternateCase('s');
    expect(returnValue).toEqual('S');
  });
  test(
      'should return a capital then a lower case letter for a string of length 2',
      () => {
        const returnValue = alternateCase('st');
        expect(returnValue).toEqual('St');
      });
  test(
      'should return a capital then a lower case letter for a string of length 3 with only two letters, ignoring any spaces', () => {
        const returnValue = alternateCase('s t');
        expect(returnValue).toEqual('S t');
      },
  );
  test(
      'should return a string with alternating case, starting with a capital, ignoring any spaces or other characters', () => {
        const returnValue = alternateCase('striNg of lots of 5tring5');
        expect(returnValue).toEqual('StRiNg Of LoTs Of 5TrInG5');
      },
  );
});
