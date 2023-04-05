// TESTS

const caesarCipher = require('../../katas/caesar-cipher');

describe.only('caesarCipher tests', () => {
  // would we want to cipher an empty string?
  // really what we want to know is is it the same length, ie 0?
  test('Returns an empty string when passed an empty string', () => {
    const input = '';
    const expected = '';
    const output = caesarCipher(input, 0);
    expect(output).toBe(expected);
  });
  // this is a good start, better than mine i think. I went for the negated behaviour rather than the positive behaviour first. I don't think I was right to do that.
  test('Returns a 1 character string which has been moved by 0 spaces', () => {
    const input = 'a';
    const expected = 'a';
    const output = caesarCipher(input, 0);
    expect(output).toBe(expected);
  });
  test('Returns a 1 character string which has been moved by 1 space positive', () => {
    const input = 'h';
    const expected = 'i';
    const output = caesarCipher(input, 1);
    expect(output).toBe(expected);
  });
  // do -1 next
  test('Returns a longer one word string which has been moved by 2 spaces positive', () => {
    const input = 'hello';
    const expected = 'jgnnq';
    const output = caesarCipher(input, 2);
    expect(output).toBe(expected);
  });
  test('Returns a 1 character string which has been moved by 1 space negative', () => {
    const input = 'b';
    const expected = 'a';
    const output = caesarCipher(input, -1);
    expect(output).toBe(expected);
  });
  test('Returns a longer one word string which has been moved by 2 spaces negative', () => {
    const input = 'hello';
    const expected = 'fcjjm';
    const output = caesarCipher(input, -2);
    expect(output).toBe(expected);
  });
  // is white space any more complex than any other character? I think your tests have been influenced by a solution that was brewing in your head before writing them. Should a test suite's test descriptions be fully written before commencing testing?
  // There's an and in the test description
  test('Ignores white space and does not move the white space position, does not move words when moved by 0 spaces', () => {
    const input = 'hello hello';
    const expected = 'hello hello';
    const output = caesarCipher(input, 0);
    expect(output).toBe(expected);
  });
  test('Ignores white space and does not move the white space position, moves rest of word by 2 spaces positive', () => {
    const input = 'hello hello';
    const expected = 'jgnnq jgnnq';
    const output = caesarCipher(input, 2);
    expect(output).toBe(expected);
  });
  test('Ignores special characters outside of the letters a-z, does not change the special characters and keeps them included', () => {
    const input = 'hello hello!!';
    const expected = 'jgnnq jgnnq!!';
    const output = caesarCipher(input, 2);
    expect(output).toBe(expected);
  });
  test('Returns a longer string with a caesar cipher applied with 2 different words, which includes a space, a special character in a negative position', () => {
    const input = 'hello world!';
    const expected = 'ebiil tloia!';
    const output = caesarCipher(input, -3);
    expect(output).toBe(expected);
  });
  // This should be tested on a single character first
  test('Returns the new word with a shift applied (looping back a-z/z-a)', () => {
    expect(caesarCipher('zoo', 1)).toBe('app');
    expect(caesarCipher('app', -1)).toBe('zoo');
  });
});
