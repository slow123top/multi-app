if (!Array.prototype.reduce) {
    Array.prototype.reduce = function (callback) {
        if (this == null) {
            throw new TypeError('this is called by null or undefined');
        }
        if (typeof callback !== 'function') {
            throw new TypeError(callback + 'is not a function');
        }
        var arr = Object(this);
        var len = arr.length;
        var k = 0;
        var value;
        if (arguments.length >= 2) {
            value = arguments[1];
        } else {
            // 如果默认值不存在  把累加器默认为第一个值
            while (k < len && !(k in arr)) {
                k++;
            }

            if (k > len) {
                throw new TypeError('Reduce of array has no initValue')
            }
            // 如果数组不为空  且没有设置初始值   数组第一个值就是默认值
            value = arr[k];
            k++
        }

        while (k < len) {
            if (k in arr) {
                value = callback(value, arr[k], k, arr);
            }
            k++;
        }
        return value;
    }
}