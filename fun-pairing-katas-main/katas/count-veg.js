function countVeg(vegArray, vegType) {
	let count = 0;

	vegArray.forEach((veg) => {
		if (veg.type === vegType) {
			count += veg.quantity;
		}
  });
  
	return count;
};

module.exports = countVeg;
