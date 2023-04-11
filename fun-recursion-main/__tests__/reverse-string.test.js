const _ = require('../functions');

describe('reverse', () => {
  test('should reverse the order of the characters in a string', () => {
    expect(_.reverse('abc')).toEqual('cba');
    expect(_.reverse('hello world!')).toEqual('!dlrow olleh');
  });
});
