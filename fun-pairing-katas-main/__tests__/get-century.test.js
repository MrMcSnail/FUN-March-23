/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 9,999 (the '100th' century)
*/

const getCentury = require('../katas/get-century');

describe('getCentury', () => {
  test('should return a string', () => {
    expect(getCentury(1999)).toEqual(expect.any(String));
  });
  test('should return a century in cardinal shorthand', () => {
    expect(getCentury(1999)).toEqual(expect.stringMatching(/^\d+(?:th|st|nd|rd)$/));
  });
  test('should return the correct century', () => {
    expect(getCentury(1999)).toBe('20th');
    expect(getCentury(2004)).toBe('21st');
    expect(getCentury(3100)).toBe('32nd');
    expect(getCentury(289)).toBe('3rd');
  });
});
