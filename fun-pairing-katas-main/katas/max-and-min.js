/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(array) {
  switch (array.length) {
    case 0:
      return 0;
    case 1:
      return array[0];
    default:
      return array.reduce((accumulator, currentValue) => {
        return accumulator > currentValue ? accumulator : currentValue;
      }, 0);
  }
}

function min() {}

module.exports = { max, min };
