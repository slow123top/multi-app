// if (!Array.prototype.join) {
Array.prototype.join = function () {
    // var sep = arguments[0];
    // 首先判断arr是否存在
    if (!this) {
        return;
    }
    var arr = Object(this);
    var len = arr.length;
    if (!len) {
        return '';
    }
    var sep = arguments.length === 0 ? ',' : String(arguments[0]);
    var res = arr[0];
    var k = 1;
    while (k < len) {
        res += sep + arr[k];
        k++;
    }
    return res;
}
// }
const a = [1, 2, 3, 4];
console.log(a.join(''));