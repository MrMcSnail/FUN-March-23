const _ = require('../functions');

describe('sumDigits()', () => {
  it('should sum the digits of a number until only one digit remains', () => {
    expect(_.sumDigits(11)).toBe(2);
    expect(_.sumDigits(99)).toBe(9);
    expect(_.sumDigits(256)).toBe(4);
    expect(_.sumDigits(9876)).toBe(3);
  });
});
