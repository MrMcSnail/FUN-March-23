/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
  return args.reduce((accumulator, currentVal) => {
    if (typeof currentVal === 'number') {
      accumulator += currentVal;
    }
    return accumulator;
  }, 0);
}

module.exports = sumArgs;
