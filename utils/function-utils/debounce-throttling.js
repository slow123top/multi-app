/**
 * 在一段时间后执行函数，如果这段时间内触发了函数，应该重新计时   相当于函数在最后计时和执行 
 * @param {*} func 
 * @param {*} delay 
 * @returns 
 */
const debounce = function (func, delay) {
    if (!isFunction(func)) {
        throw TypeError(func + 'not a function');
    }
    // 如果不超过这个时间  应该重新计时
    let timer;
    return function () {
        // 保留this
        const that = this;
        // 保留参数
        const args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(that, args);
        }, delay);
    }
}

/**
 * 一段时间内只允许执行一次函数   相当于函数最开始就计时
 * @param {*} func 
 * @param {*} period 
 * @returns 
 */
const throttling = function (func, period) {
    if (!isFunction(func)) {
        throw TypeError(func + 'not a function');
    }
    // 如果不超过这个时间  应该重新计时
    let timer;
    return function () {
        // 保留this
        const that = this;
        // 保留参数
        const args = arguments;
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            func.apply(that, args);
            timer = null;
        }, period);
    }
}

export { debounce, throttling };

function isFunction(func) {
    return typeof func === 'function';
}