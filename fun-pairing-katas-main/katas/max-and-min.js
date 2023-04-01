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
      const numericalValues = filterNumericalValues(array);
      return findExtremum(numericalValues, 'max');
  }
}

function min(array) {
  switch (array.length) {
    case 0:
      return 0;
    case 1:
      return array[0];
    default:
      const numericalValues = filterNumericalValues(array);
      return findExtremum(numericalValues, 'min');
  }
}

function filterNumericalValues(array) {
  const isNotNaN = (val) => {
    return !Number.isNaN(val);
  };

  const isTypeNumber = (val) => {
    return typeof val === 'number';
  };

  const isANumerical = (val) => {
    return isNotNaN(val) && isTypeNumber(val);
  };

  return array.filter(
      (value) => {
        return isANumerical(value);
      },
  );
}

function findExtremum(array, extremum) {
  if (array.length) {
    let comparison = null;
    return array.reduce(
        (accumulator, currentValue) => {
          switch (extremum) {
            case 'max':
              comparison = accumulator >= currentValue;
              break;
            case 'min':
              comparison = accumulator <= currentValue;
              break;
            default:
              return NaN;
          }
          return comparison ? accumulator : currentValue;
        });
  } else {
    return NaN;
  }
}

module.exports = { max, min };
