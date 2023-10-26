const reverseString = require("../../utils/reverseString");

describe("testing the reverseString function", () => {
	it("should reverse a string", () => {
		expect(reverseString("hello")).toBe("olleh");
	});

	it("should reverse a string while saving the initial letter case", () => {
		expect(reverseString("Abcdef")).toBe("fedcbA");
		expect(reverseString("RanDOm cAsE")).toBe("EsAc mODnaR");
	});

	it("should work with numbers too", () => {
		expect(reverseString("12345abcdef")).toBe("fedcba54321");
		expect(reverseString("12345")).toBe("54321");
	});
});
