if (Array.prototype.unshift) {
    // 添加最前面一个
    Array.prototype.unshift = function () {
        if (!this) {
            throw TypeError()
        }
        var arr = this;
        var len = arr.length;
        var argLen = arguments.length;
        if (argLen) {
            arr.length = len + argLen;
            for (var j = len - 1; j >= 0; j--) {
                arr[j + argLen] = arr[j];
            }
            for (var i = 0; i < argLen; i++) {
                arr[i] = arguments[i];
            }
        }
        return arr.length;
    }
}
var a = [];
console.log(a.unshift());
console.log(a);

