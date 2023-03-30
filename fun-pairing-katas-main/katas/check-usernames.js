function checkUsernames(usernames) {
  let allValidUsernames = true;

  usernames.forEach((username) => {
    const validUsernameMatcher = /^[a-z0-9_]{5,20}$/;
    const isValid = validUsernameMatcher.test(username);
    if (!isValid) {
      allValidUsernames = false;
    }
  });
  return allValidUsernames;
}

module.exports = checkUsernames;
