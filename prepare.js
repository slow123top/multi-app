// 手写find实现  some   every  forEach  findIndex filter map类似
if (!Array.prototype.find) {
    Array.prototype.find = function (func, thisObj) {
        // 第一个参数是函数
        if (typeof func !== 'function') {
            throw TypeError(func + 'is not a function');
        }
        // 第二个参数是绑定对象  如果没有 绑定到全局
        const thisToBind = thisObj ? null : thisObj;
        // 数组本身
        const arr = this;
        const len = arr.length;
        for (let i = 0; i < len; i++) {
            if (func.bind(thisToBind, [arr[i], i, arr])) {
                return arr[i];
            }
        }
        return undefined;
    }
}
// 手写call
function callFunc(context) {
    const func = this;
    context.f = func;
    const args = arguments.length > 1 ? [...arguments].slice(1) : [];
    const result = context.f(...args);
    delete context.f;
    return result;
}
// 手写new
function newFunc(func) {
    const newObj = Object.create(func);
    func.call(newObj);
    if (typeof newObj === 'object' && newObj !== null) {
        return newObj;
    }
    return this;
}
// 手写一个bind
function bindFunc(func) {
    return function a() {
        if (this instanceof a) {
            // 当作构造函数调用
            return newFunc(func);
        }
        return func.bind(this);
    }
}
// 手写Object.create
Object.create = function (proto) {
    const F = function () {
    }
    F.prototype = proto;
    return new F();
}

// 快速排序  升序
function quickSort(arr, left, right) {
    let i = left, j = right;
    let base = arr[0];
    while (i < j) {
        while (i < j && arr[j] >= base) {
            j--;
        }
        arr[i] = arr[j];
        while (i < j && arr[i] <= base) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = base;
    quickSort(arr, left, j - 1);
    quickSort(arr, i + 1, right);
}
function sort(arr) {
    quickSort(arr, 0, arr.length - 1);
    return arr;
}
// 二分查找  正序
function binaryQuery(arr, value) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let mid = Math.floor((i + j) >> 1);
        if (value === arr[mid]) {
            return mid;
        } else if (value < arr[mid]) {
            j = mid;
        } else if (value > arr[mid]) {
            i = mid;
        }
    }
    return -1;
}