var expect = require("chai").should();
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
    it('Should return string without vowels',function() {
        disemvowel('andrew').should.equal('ndrw');
    });
});

describe("Titleize", function() {
    it('Should return the first letter of a title and name as a capital letter ',function() {
        titleize('mr ed').should.equal('Mr Ed');
    });
});