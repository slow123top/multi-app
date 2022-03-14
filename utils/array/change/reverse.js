Array.prototype.reverse = function () {
    if (!this) {
        return;
    }
    var arr = Object(this);
    var len = arr.length;
    var middle = Math.floor(len / 2);
    var low = 0;
    while (low !== middle) {
        var higher = len - low - 1;
        var lowValue = arr[low];
        var highValue = arr[higher];
        arr[low] = highValue;
        arr[higher] = lowValue;
    }
    return arr;
}