if (!Array.prototype.some) {
    Array.prototype.some = function (cb, thisArg) {
        let T, k;
        if (!this) {
            new TypeError('this is not defined');
        }
        const arr = Object(this);
        const len = arr.length >>> 0;
        T = arguments.length > 1 ? thisArg : undefined;
        k = 0;
        while (k < len) {
            if (arr[k] && cb.call(T, arr[k], k, arr)) {
                return true;
            }
            k++;
        }

        return false;
    }
}