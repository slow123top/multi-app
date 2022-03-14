if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function (func) {
            if (!this) {
                throw new Error(this + 'is not a object')
            }
            if (typeof func !== 'function') {
                throw new TypeError(func + 'is not a function');
            }
            var arr = this;
            var len = arr.length;
            var thisObj = arguments.length > 1 ? arguments[1] : undefined;
            var k = 0;
            while (k < len) {
                if (func.call(thisObj, arr[k], k, arr)) {
                    return k;
                }
                k++;
            }
            return -1;
        }
    })
}