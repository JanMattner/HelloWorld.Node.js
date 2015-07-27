var MyClass = {
    A: 0,
    B: 0,
    Sum: function() {
        return this.A + this.B;
    },
    AddToA: function(amount) {
        return this.A + amount;
    },
    AddToB: function(amount) {
        return this.B + amount + 1;
    }
}

module.exports = MyClass;