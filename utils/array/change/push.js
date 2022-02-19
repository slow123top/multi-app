if (!Array.prototype.push) {
    Array.prototype.push = function () {
        var len = arguments.length;
        for (var i = 0; i < len; i++) {
            this[this.length] = arguments[i];
        }
        return this.length;
    }
}

console.log([1, 2, 3].push(33,5,6,7));
// console.log([1, 2, 3].push(33,5,6,7));