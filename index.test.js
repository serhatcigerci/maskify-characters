const maskify = require("./index");

it("Should maskify all characters except last four", () => {
	const result = maskify("Your card number: 1234 5678 9123 4567");
	expect(result).toEqual("#################################4567");
});

it("Should maskify all characters except last four", () => {
	const result2 = maskify("You must understand that there is more than one path to the top of the mountain");
	expect(result2).toEqual("###########################################################################tain");
});

it("Should maskify all characters except last four", () => {
	const result3 = maskify("Hey there!");
	expect(result3).toEqual("######ere!");
});