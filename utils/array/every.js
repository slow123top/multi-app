if (!Array.prototype.every) {
    Array.prototype.every = function (cb, thisArg) {
        let T, k;
        if (!this) {
            new TypeError('this is not defined');
        }
        if (typeof cb !== 'function') {
            new TypeError(cb + 'is not a function')
        }
        const arr = Object(this);
        const len = arr.length >>> 0;
        T = arguments.length > 1 ? thisArg : undefined;
        k = 0;
        while (k < len) {
            if (arr[k] && !cb.call(T, arr[k], k, arr)) {
                return false;
            }
            k++
        }
        return true;
    }
}