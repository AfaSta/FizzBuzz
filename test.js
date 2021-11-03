const FizzBuzz = require('./FizzBuzzDetector.js');

const assert = require('assert')


it("checking input data for null", function() {
        let replace = new FizzBuzz();
        let str =  null;
        assert.equal(replace.getOverlappings(str), 'null');
    });
it("checking input data for a range", function() {
        let replace = new FizzBuzz();
        let str = 'string';
        assert.equal(replace.getOverlappings(str), 'range 7-100');
    });
it("checking input data for a range", function() {
        let replace = new FizzBuzz();
        let str = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum quos saepe dolor ab! Vero, delenitii.";
        assert.equal(replace.getOverlappings(str), 'range 7-100');
    });
it("checking string with replacement", function() {
        let replace = new FizzBuzz();
        let str = "Mary had a little lamb Little lamb, little lamb Mary had a little lamb It's fleece was white as snow";
        assert.equal(replace.getOverlappings(str).str, "Mary had Fizz little Buzz Fizz lamb, little Fizz Buzz had Fizz little lamb FizzBuzz fleece was Fizz as Buzz");
    });
it("checking the count of replacements", function() {
        let replace = new FizzBuzz();
        let str = "Mary had a little lamb Little lamb, little lamb Mary had a little lamb It's fleece was white as snow";
        assert.equal(replace.getOverlappings(str).count, 9);
    });
