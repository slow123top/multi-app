//直接调用indexOf
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement) {
        // 省略校验
        // var index = startIndex || 0;
        var len = arguments.length;
        var index = arguments.length > 1 ? arguments[1] : 0;
        if (Math.abs(index) > len) {
            new Error('out of the array length')
        }
        if (index < 0) {
            index = index + len;
        }
        for (var i = index; i < len; i++) {
            if (this[i] === searchElement) {
                return true;
            }
        }
        return false;
    }
}