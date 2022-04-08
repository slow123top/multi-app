Array.of = function () {
    if (!this) {
        throw new Error(this + 'is null')
    }
    const arr = Object(arguments);
    const len = arr.length;
    const C = this;
    let A;
    if (isConstructor(C)) {
        A = Object(new C(len));
    } else {
        A = new Array(len);
    }
    let k = 0;
    while (k < len) {
        const kStr = String(k);
        A[k] = arr[kStr];
        k++;
    }
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