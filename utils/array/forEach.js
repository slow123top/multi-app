if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (cb, thisArg) {
        let T, k;
        if (!this) {
            console.error('this is not defined');
        }
        // this指的是数组实例
        const arr = Object(this);
        if (Object.prototype.toString.call(cb) !== '[object Function]' || typeof cb !== 'function') {
            console.error(cb + 'is not a function')
        }
        if (arguments.length > 1) {
            T = thisArg;
        }
        k = 0;
        while (k < arr.length) {
            for (k in arr) {
                const value = arr[k];
                // T若为undefined  T指向全局  相当于window
                cb.call(T, value, k, arr);
            }
            k++
        }
    }
}