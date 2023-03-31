const caesarCipher = require('../katas/caesar-cipher');

describe('caesarCipher()', () => {
  test.skip('should return a new string', () => {
    const passedVal = 'old string';
    const returnedVal = caesarCipher(passedVal, 0);
    expect(returnedVal).not.toBe(passedVal);
  });

  test('should return a string of equal length to the string that is passed in', () => {
    const passedVal = 'old string';
    const returnedVal = caesarCipher(passedVal, 0);
    expect(returnedVal.length).toBe(passedVal.length);
  });

  test('should retain the position of all string characters passed in', () => {
    const passedVal = 'old string?';
    const passedValMatcher = /\w{3}\s\w{6}\?/i;

    const returnedVal = caesarCipher(passedVal, 0);

    expect(returnedVal).toEqual(expect.stringMatching(passedValMatcher));
  });

  test('should ignore a single non-alphabetical string character;\n\treturns the same character', () => {
    const passedVal = '!';
    const returnedVal = caesarCipher(passedVal, 0);
    expect(returnedVal).toEqual(passedVal);
  });

  test('should ignore all string characters except alphabetical in a longer string', () => {
    const passedVal = 'a1 b\' c_ d!';
    const nonLetterMatcher = /\w1\s\w\'\s\w\_\s\w\!/;

    const returnedVal = caesarCipher(passedVal, 0);

    expect(returnedVal).toMatch(nonLetterMatcher);
  });

  test('should shift a single string character by the correct amount\n\twhen a positive number is passed in', () => {
    const plaintext = 'a';
    const shift = 1;
    const ciphertext = caesarCipher(plaintext, shift);

    expect(ciphertext).toBe('b');
  });

  test('should shift a single string character by the correct amount\n\twhen a negative number is passed in', () => {
    const plaintext = 'z';
    const shift = -1;
    const ciphertext = caesarCipher(plaintext, shift);

    expect(ciphertext).toBe('y');
  });
  test('should shift a single character `x` past `z` through to `a`\n\twhen shifted by 3', () => {
    const plaintext = 'x';
    const shift = 3;
    const ciphertext = caesarCipher(plaintext, shift);

    expect(ciphertext).toBe('a');
  },
  );
  test(
      'should shift a single character `c` past `a` through to `z`\n\twhen shifted by -3', () => {
        const plaintext = 'c';
        const shift = -3;
        const ciphertext = caesarCipher(plaintext, shift);

        expect(ciphertext).toBe('z');
      },
  );
  test.todo(
      'should shift all string characters in a single word\n\tby the correct amount when a positive number is passed in',
  );
  test.todo(
      'should shift all string characters in a single word\n\tby the correct amount when a negative number is passed in',
  );
  test.todo(
      'should shift all string characters in a single word\n\tincluding characters shifting from `z` up through `a` when a positive number is passed in',
  );
  test.todo(
      'should shift all string characters in a single word\n\tincluding characters shifting from `a` down through `z` when a negative number is passed in',
  );
  test.todo(
      'should be insensitive to capitalisation: returns a lowercase string',
  );
  test.todo('should work on longer strings and sentences');
  test.todo('should work on multi-line strings which use backticks');
});
