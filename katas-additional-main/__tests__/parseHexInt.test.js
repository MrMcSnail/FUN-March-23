const parseHexInt = require("../parseHexInt/parseHexInt");

describe("parseHexInt()", () => {
	test("should return a base 10 number when passed a string representing a hexadecimal value", () => {
		const one = "1";
		const ten = "A";
		const seventeen = "11";
		const thirtyTwo = "20";
		const twoHundredSeventyTwo = "110";

		expect(parseHexInt(one)).toBe(1);
		expect(parseHexInt(ten)).toBe(10);
		expect(parseHexInt(seventeen)).toBe(17);
		expect(parseHexInt(thirtyTwo)).toBe(32);
		expect(parseHexInt(twoHundredSeventyTwo)).toBe(272);
	});
	test("should be case insensitive", () => {
		const ten = "A";
	});
});
