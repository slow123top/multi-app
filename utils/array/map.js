if (!Array.prototype.map) {
    Array.prototype.map = function (cb, thisArg) {
        if (!this) {
            new TypeError('this is not defined');
        }
        var arr = Object(this);
        var thisObj = thisArg || window;
        var k = 0;
        var res = new Array(arr.length);
        while (k !== arguments.length - 1) {
            for (k in arr) {
                res.push(cb.call(thisObj, arr[k], k, arr));
            }
            k++;
        }
        return res;
    }
}