var assert = require("assert");
var myClass = require("../lib/MyClass");
describe('MyClass', function () {
    describe('#Sum', function () {
        it('should return Sum of A and B', function () {
            myClass.A = 2;
            myClass.B = 4;
            assert.equal(6, myClass.Sum());
        });
    });
    describe('#AddToA', function () {
        it('should add ammount to A', function () {
            var a = 2;
            var b = 4;
            myClass.A = a;
            myClass.B = b;
            var added = 12;
            assert.equal(added + a, myClass.AddToA(added));
        });
    });
    describe('#AddToB', function () {
        it('should add ammount to B', function () {
            var a = 2;
            var b = 4;
            myClass.A = a;
            myClass.B = b;
            var added = 12;
            assert.equal(added + b, myClass.AddToB(added));
        });
    });
});
