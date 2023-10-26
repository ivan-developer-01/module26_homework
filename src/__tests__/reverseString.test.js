const reverseString = require("../utils/reverseString");

describe("testing the reverseString function", () => {
	it("should reverse a string", () => {
		expect(reverseString("hello")).toEqual("olleh");
	});

	it("should reverse a string while saving the initial letter case", () => {
		expect(reverseString("Abcdef")).toEqual("fedcbA");
		expect(reverseString("RanDOm cAsE")).toEqual("EsAc mODnaR");
	});
});
