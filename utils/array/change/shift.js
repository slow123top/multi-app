// if (!Array.prototype.shift) {
Array.prototype.shift = function () {
    var arr = Object(this);
    if (!arr) {
        throw TypeError(this + ' is not defined');
    }

    var len = arr.length;
    var k = 0;
    if (len) {
        var first = arr[0];
        while (k < len) {
            // 省空间  不要额外新建数组
            if (k + 1 !== len) {
                arr[k] = arr[k + 1];
            }
            k++;
        }
        arr.length = len - 1;
        // 更改原数组
        return first;
    }
}
var a = [1, 2, 3];
console.log(a.shift());
console.log(a);
// }