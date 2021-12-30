if (String.prototype.includes) {
    String.prototype.includes = function (str, index) {
        if (!this) {
            new TypeError('this is not defined');
        }
        if (!str && str !== '') {
            new TypeError(str + 'is not a string');
        }
        var s = Object(this);
        var realIndex = arguments.length > 1 ? index : 0;
        var strLen = str.length;
        if ((realIndex + strLen) > s.length) {
            return false;
        }
        return s.indexOf(str, realIndex) !== -1;
    }
}