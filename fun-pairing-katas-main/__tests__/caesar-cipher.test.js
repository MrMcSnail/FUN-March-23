/* cspell:disable */
const caesarCipher = require('../katas/caesar-cipher');

describe('caesarCipher()', () => {
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
  });

  test('should shift a single character `c` past `a` through to `z`\n\twhen shifted by -3', () => {
    const plaintext = 'c';
    const shift = -3;
    const ciphertext = caesarCipher(plaintext, shift);

    expect(ciphertext).toBe('z');
  });

  test('should shift all string characters in a single word\n\tby the correct amount when a positive number is passed in', () => {
    expect(caesarCipher('hello', 2)).toEqual('jgnnq');
  });

  test('should shift all string characters in a single word\n\tby the correct amount when a negative number is passed in', () => {
    expect(caesarCipher('hello', -3)).toEqual('ebiil');
  });

  test('should shift all string characters in a single word\n\tincluding characters shifting from `z` up through `a` when a positive number is passed in', () => {
    expect(caesarCipher('fizz', 10)).toEqual('psjj');
  });

  test('should shift all string characters in a single word\n\tincluding characters shifting from `a` down through `z` when a negative number is passed in', () => {
    expect(caesarCipher('aardvark', -8)).toEqual('ssjvnsjc');
  },
  );
  test('should be insensitive to capitalisation: returns a lowercase string', () => {
    expect(caesarCipher('FIzz', 10)).toEqual('psjj');
  });
  test('should work on longer strings and sentences', () => {
    const plaintext = 'If he had anything confidential to say, he wrote it in cipher. That is, by so changing the order of the letters of the alphabet, that not a word could be made out!';

    const ciphertext = 'wt vs vor obmhvwbu qcbtwrsbhwoz hc gom, vs kfchs wh wb qwdvsf. hvoh wg, pm gc qvobuwbu hvs cfrsf ct hvs zshhsfg ct hvs ozdvopsh, hvoh bch o kcfr qcizr ps aors cih!';

    expect(caesarCipher(plaintext, 14)).toEqual(ciphertext);
  });
  test('should work on multi-line strings which use backticks', () => {
    const plaintext =
`If he had anything confidential to say, 

he wrote it in cipher.
    
That is,
    
by so changing the order of the letters of the alphabet, that not a word could be made out!`;

    const ciphertext =
`mj li leh ercxlmrk gsrjmhirxmep xs wec, 

li avsxi mx mr gmtliv.
    
xlex mw,
    
fc ws glerkmrk xli svhiv sj xli pixxivw sj xli eptlefix, xlex rsx e asvh gsyph fi qehi syx!`;
    expect(caesarCipher(plaintext, 4)).toEqual(ciphertext);
  });
});
