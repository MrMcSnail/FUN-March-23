const caesarCipher = require('../katas/caesar-cipher');

describe('caesarCipher', () => {
  // not needed
  test('should return a string', () => {
    expect(typeof caesarCipher('', 0)).toBe('string');
  });

  test('should return the given string when passed any string and the number 0', () => {
    expect(caesarCipher('test', 0)).toBe('test');
    expect(caesarCipher('thisisatest', 0)).toBe('thisisatest');
  });

  test('should return a string where each plaintext letter of the given string is the next character along in the alphabet when passed the number 1', () => {
    expect(caesarCipher('test', 1)).toBe('uftu');
    expect(caesarCipher('thisisatest', 1)).toBe('uijtjtbuftu');
  });

  test('should return a string where each plaintext letter of the given string is the previous character in the alphabet when passed the number -1', () => {
    expect(caesarCipher('test', -1)).toBe('sdrs');
    expect(caesarCipher('thisistest', -1)).toBe('sghrhrsdrs');
  });

  test('should ignore any non-plaintext letter including spaces', () => {
    expect(caesarCipher('TeSt!!!!!', -1)).toBe('sdrs!!!!!');
    expect(caesarCipher('test test test test', -1)).toBe('sdrs sdrs sdrs sdrs');
    expect(caesarCipher('hello world!', -3)).toBe('ebiil tloia!');
  });
  //  I think the tests above are really good ^^^^
  test('should work for any number that does not result in a character going above z or below a', () => {
    expect(caesarCipher('TeSt!!!!!', -4)).toBe('paop!!!!!');
    expect(caesarCipher('aaaaaaaaaa', 9)).toBe('jjjjjjjjjj');
    expect(caesarCipher('bbbbbbbb b', 21)).toBe('wwwwwwww w');
    expect(caesarCipher('test test test test', 3)).toBe('whvw whvw whvw whvw');
  });

  test('should circle back through the alphabet till it lands on a valid plaintext character if a character was to go above z', () => {
    expect(caesarCipher('zzzzz', 4)).toBe('ddddd');
    expect(caesarCipher('aaaaaaaaaa', 28)).toBe('cccccccccc');
  });

  test('should circle back through the alphabet till it lands on a valid plaintext character if a character was to go below a', () => {
    expect(caesarCipher('aaaaaaaaa', -1)).toBe('zzzzzzzzz');
    expect(caesarCipher('bbbbbbb', -28)).toBe('zzzzzzz');
  });

  test('should also circle back through the alphabet if a character goes above Z or below A', () => {
    expect(caesarCipher('ZZZZZZZ', 4)).toBe('ddddddd');
    expect(caesarCipher('YYYYYYYY', 2)).toBe('aaaaaaaa');
    expect(caesarCipher('AAAAAAAA', -1)).toBe('zzzzzzzz');
    expect(caesarCipher('CCCCCCCC', -4)).toBe('yyyyyyyy');
  });

  // does it still do this when passed a string with other characters?
});
