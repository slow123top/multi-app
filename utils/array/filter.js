if (!Array.prototype.filter) {
    Array.prototype.filter = function (cb) {
        var T;
        if (!this) {
            new TypeError(this + 'is a null or undefined')
        }
        if (arguments.length > 1) {
            T = arguments[1];
        }
        var arr = this;
        var k = 0;
        var len = this.length;
        var res = [];
        while (k !== len) {
            for (k in arr) {
                if (cb.call(T, arr[k], k, arr)) {
                    res.push(arr[k]);
                }
            }
        }
        return res;

    }
}