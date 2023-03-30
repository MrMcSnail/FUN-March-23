const checkUsernames = require('../katas/check-usernames');
/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may only contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

describe('checkUsernames', () => {
  test('should be a function', () => {
    expect(typeof checkUsernames).toEqual('function');
  });
  test('should return a boolean value', () => {
    expect(checkUsernames([])).toEqual(expect.any(Boolean));
  });
  test('should return true for an array containing a single valid usename', () => {
    const usernames = ['_900d_pa55w0rdz_r0ck'];
    expect(checkUsernames(usernames)).toBe(true);
  });
  test('should return false for an array containing a single invalid username', () => {
    const usernames = ['xxxxxx_900d_pa55w0rdz_r0ck'];
    expect(checkUsernames(usernames)).toBe(false);
  });
  test('should return true for an array containing multiple valid usernames', () => {
    const usernames = ['_900d_pa55w0rdz_r0ck', 'password', 'date_of_birth', '01_01_1901'];
    expect(checkUsernames(usernames)).toBe(true);
  });
  test('should return false for an array containing multiple invalid usernames', () => {
    const usernames = ['xxxxxx_900d_pa55w0rdz_r0ck', 'pass', 'DOB'];
    expect(checkUsernames(usernames)).toBe(false);
  });
  test('should return false for an array containing multiple valid usernames and a single invalid username', () => {
    const usernames = ['_900d_pa55w0rdz_r0ck', 'password', 'date_of_birth', '01_01_1901', 'DOB'];
    expect(checkUsernames(usernames)).toBe(false);
  });
});
