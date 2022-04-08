Array.from = function (obj) {
    const thisObj = arguments.length > 2 ? arguments[2] : undefined;
    const mapFn = arguments.length > 1 ? arguments[1] : undefined;
    if (!obj) {
        throw new Error('没有定义数组化的对象');
    }
    const rawArr = Object(obj);
    const C = this;
    const len = rawArr.length;
    let A;
    if (isConstructor(C)) {
        A = Object(new C(len));
    } else {
        A = new Array(len);
    }
    let k = 0;
    while (k < len) {
        if (typeof mapFn === 'function') {
            A[k] = mapFn.call(thisObj, rawArr[k], k);
        } else {
            A[k] = rawArr[k];
        }
        k++;
    }
    // 数组或者类数组
    return A;
}

function isConstructor(C) {
    try {
        new C();
    } catch (e) {
        return false;
    }
    return true;
}