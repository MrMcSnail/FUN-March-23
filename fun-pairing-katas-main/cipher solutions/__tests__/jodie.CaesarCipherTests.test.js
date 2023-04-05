const caesarCipher = require('../katas/caesar-cipher');

describe('ceasarCipher', () => {
  test('should return a string', () => {
    const string = 'a';
    const num = 1;
    expect(typeof caesarCipher(string, num)).toBe('string');
  });
  test('should return a single letter string that has shifted by 1', () => {
    expect(caesarCipher('a', 1)).toEqual('b');
  });
  // do negative next
  // test this first vvv
  test('should return a string of equal length to the string that has been passed in', () => {
    const string = 'hello';
    const result = caesarCipher(string);
    expect(result).toHaveLength(string.length);
  });
  test('should return a single word that has shifted by 1', () => {
    expect(caesarCipher('hello', 1)).toEqual('ifmmp');
  });
  test('should return a word that has shifted -1', () => {
    expect(caesarCipher('hello', -1)).toEqual('gdkkn');
  });
  test('should return a word where shifted when a negative number is passed and wrap around the the beginning of the alphabet', () => {
    expect(caesarCipher('best', -5)).toEqual('wzno');
    expect(caesarCipher('and', -10)).toEqual('qdt');
  });
  test('returns non alphabetic character in same position', () => {
    expect(caesarCipher('hello!', 1)).toEqual('ifmmp!');
    expect(caesarCipher('hello@£', 1)).toEqual('ifmmp@£');
    expect(caesarCipher('hello123', 1)).toEqual('ifmmp123');
  });
  test('should return a sentence that has shifted by 1', () => {
    expect(caesarCipher('hello Jodie!', 1)).toEqual('ifmmp kpejf!');
  });
  test('should return a sentence that has shifted by -1', () => {
    expect(caesarCipher('hello Jodie!', -1)).toEqual('gdkkn inchd!');
  });
});
