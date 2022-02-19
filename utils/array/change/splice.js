const index = require("@vue/babel-preset-jsx");
const { f } = require("core-js/modules/_object-dp");

// if (Array.prototype.splice) {
Array.prototype.splice = function () {
    if (!this) {
        throw new TypeError(this + 'is a null');
    }
    var arr = Object(this);
    if (!arguments.length) {
        return arr;
    }
    if (arguments.length === 1) {
        // 仅删除 且全部删除
        var first = arguments[0];
        var removeIndex = first >= 0 ? Math.min(first, arr.length) : Math.max(first + arr.length, 0);
        return removeItemByIndex(arr, removeIndex, arr.length);
    }
    if (arguments.length === 2) {
        var first = arguments[0];
        var removedNumber = arguments[1];
        var removeIndex = first >= 0 ? Math.min(first, arr.length) : Math.max(first + arr.length, 0);
        return removeItemByIndex(arr, removeIndex, Math.min(arr.length - removeIndex, removedNumber));
    }
    if (arguments.length > 2) {
        var first = arguments[0];
        var removedNumber = arguments[1];
        var removeIndex = first >= 0 ? Math.min(first, arr.length) : Math.max(first + arr.length, 0);
        var temp = [];
        for (var i = 2; i < arguments.length; i++) {
            temp.push(arguments[i]);
        }

        var removed = removeItemByIndex(arr, removeIndex, Math.min(arr.length - removeIndex, removedNumber));
        insertItemByIndex(arr, removeIndex, temp);
        return removed;
    }
}
// }


function removeItemByIndex(arr, index, number) {
    var removed = new [].constructor(arr.length - index);
    var left = [];
    for (var i = index; i < Math.min(index + number, arr.length); i++) {
        removed[i - index] = arr[i];
    }
    var start = index - 1;
    if (start >= 0) {
        for (var j = 0; j < index; j++) {
            left[j] = arr[j];
        }
    }
    for (var x = index + number; x < Math.min(index + number, arr.length); x++) {
        left[left.length] = arr[x];
    }
    arr = left;
    console.log(arr);
    return removed;
}


function insertItemByIndex(arr, index, items) {
    var pre = arr.slice(0, index);
    var after = arr.slice(index);
    arr = [...pre, ...items, ...after];
}
console.log([2, 3, 4, 5].splice(-1));