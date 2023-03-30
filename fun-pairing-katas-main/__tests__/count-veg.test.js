const countVeg = require("../katas/count-veg");

describe("countVeg", () => {
	test("should return a zero when passed an empty array", () => {
		expect(countVeg([], "root")).toBe(0);
	});

	test("should return 0 when passed an array with one veg object which does not match", () => {
		const vegArray = [{name: "Parsnip", type: "root", quantity: 4}];
		const vegType = "leaf";
		expect(countVeg(vegArray, vegType)).toBe(0);
	});

	test("should return the quantity of veg in an array with one matching veg object", () => {
		const vegArray = [{name: "Parsnip", type: "root", quantity: 4}];
		const vegType = "root";
		expect(countVeg(vegArray, vegType)).toBe(4);
	});

	test("should return the quantity of veg in an array with more than one matching veg object", () => {
		const vegArray = [
			{name: "Carrot", type: "root", quantity: 5},
			{name: "Parsnip", type: "root", quantity: 4},
		];
		const vegType = "root";
		expect(countVeg(vegArray, vegType)).toBe(9);
  });
  
  test("should return the quantity of veg in an array with more than one mixed veg objects", () => {
		const vegArray = [
			{name: "Parsnip", type: "root", quantity: 4},
			{name: "Broccoli", type: "brassica", quantity: 1},
			{name: "Carrot", type: "root", quantity: 5},
			{name: "Onion", type: "bulb", quantity: 3},
			{name: "Chard", type: "leaf", quantity: 3},
			{name: "Runner beans", type: "legume", quantity: 8},
		];
		const vegType = "legume";
    expect(countVeg(vegArray, vegType)).toBe(8);
    expect(countVeg(vegArray, 'root')).toBe(9)
	});
});
