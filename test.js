// Mocha uses behavior driven development syntax, which reads more like a story than a test

//To run from terminal: ./node_modules/.bin/mocha test.js

//Adding a -g flag which is short for --grep, allows you to run tests whose names match a certain regular expression
////ex: ./node_modules/.bin/mocha -g "fail" test.js
////ex: ./node_modules/.bin/mocha -g "other" test.js

//The spec reporter is default, but mocha has many other built-in reporters...
////The dot reporter: ./node_modules/.bin/mocha -R dot test.js
//////The dot reporter outputs a very concise format of dots, which is handy when you have thousands of tests
////The x unit: ./node_modules/.bin/mocha -R xunit test.js
//////The xunit reporter format outputs tests results in the standard xunit XML format
////The nyan cat reporter: ./node_modules/.bin/mocha -R nyan test.js
//////The nyan reports outputs a happy little ASCII nyan cat when all your tests succeed.

var assert = require("assert");

describe("my feature", function() {
	it("works", function() {
		assert.equal("A", "A");
	});

	it("fails gracefully", function() {
		assert.throws(function() {
			throw "Error!";
		});
	});
});

describe("my other feature", function() {
	it("async", function(done) {
		setTimeout(function() {
			done();
		}, 25);
	});
});