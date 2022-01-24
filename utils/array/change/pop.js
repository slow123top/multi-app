if (Array.prototype.pop) {
    Array.prototype.pop = function () {
        if (!this) {
            throw TypeError(this + 'is not defined');
        }

        var arr = this;
        var len = arr.length;
        if (!len) {
            throw Error(arr + ' length is empty');
        }

        var last = arr[len - 1];
        arr.length = len - 1;
        return last;
    }
}

var a = ['a', 'b', 'c'];
var iterator = a.entries();
console.log(iterator);
for (let e in iterator) {
  console.log(e);
}

console.log(new Set([1,2,3]))
