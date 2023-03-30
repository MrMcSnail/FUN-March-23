function getCentury(year) {
  const isNewCentury = year % 100 === 0;
  const numCenturies = year / 100;
  const currentCentury = isNewCentury ?
		numCenturies + 1 :
		Math.ceil(numCenturies);

  const digits = currentCentury.toString();
  const trailingDigit = digits[digits.length - 1];

  let cardinalCentury = '';

  switch (trailingDigit) {
    case '1':
      cardinalCentury = digits + 'st';
      break;
    case '2':
      cardinalCentury = digits + 'nd';
      break;
    case '3':
      cardinalCentury = digits + 'rd';
      break;
    default:
      cardinalCentury = digits + 'th';
      break;
  }

  return cardinalCentury;
}

module.exports = getCentury;
