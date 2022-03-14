Array.prototype.toString = function () {
    // 实际执行的是无参数的join()
    // return Array.prototype.join()
    if (!this) {
        return;
    }
    var arr = Object(this);
    var len = arr.length;
    if (!len) {
        return '';
    }
    var sep = ',';
    var res = arr[0];
    var k = 1;
    while (k < len) {
        res += sep + arr[k];
        k++;
    }
    return res;
}