Function.prototype.call = function (thisArg) {
    if (!this) {
        new TypeError('this is not defined');
    }
}