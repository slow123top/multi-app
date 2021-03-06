if (!Array.prototype.map) {
    Array.prototype.map = function (cb, thisArg) {
        if (!this) {
            new TypeError('this is not defined');
        }
        var arr = Object(this);
        var thisObj = thisArg || window;
        var k = 0;
        var res = new Array(arr.length);
        while (k !== arr.length) {
            if (k in arr) {
                if (arr[k] !== undefined) {
                    res.push(cb.call(thisObj, arr[k], k, arr));
                }
            }
            k++;
        }
        return res;
    }
}
// 注意  不会调用删除或者从未被赋值的元素