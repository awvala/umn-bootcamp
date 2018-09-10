var expect = require("chai").expect;
var calculateTax = require("../tax");

// Write tests for the calculateTax function here
describe("Get sales tax", function() {
    it("should return the calculate sales tax", function() {
        let result = calculateTax(1);
        expect(result).to.equal(1.08);
    });
});

describe("Get sales tax", function() {
    it("should return the calculate sales tax", function() {
        let result = calculateTax(2);
        expect(result).to.equal(2.15);
    });
});