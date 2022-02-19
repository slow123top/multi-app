// if (String.prototype.substring) {
String.prototype.substring = function () {
    if (!this) {
        throw TypeError(this + 'is not defined');
    }
    // 先转换成字符串
    var str = this.toString();
    var strArr = getStrList(str);
    if (arguments.length === 0) {
        return strArr.join('');
    }
    var startP = arguments[0];
    var endP = arguments.length > 1 ? arguments[1] : strArr.length;
    var startIndex = convertStartIndex(startP, strArr.length);
    var endIndex = convertEndIndex(endP, strArr.length);
    if (startIndex > endIndex) {
        return getSubStr(strArr, endIndex, startIndex);
    }
    return getSubStr(strArr, startIndex, endIndex);
}


// }
function convertNumber(index) {
    var max = Math.max(index, 0);
    return !isNaN(max) ? max : 0;
}

function convertStartIndex(start, len) {
    var index = convertNumber(start);
    return Math.min(index, len);
}

function convertEndIndex(end, len) {
    if (end === undefined) {
        return len;
    }
    var index = convertNumber(end);
    return Math.min(index, len);
}

function getStrList(str) {
    var strList = [];
    for (var item of str) {
        strList.push(item);
    }
    return strList;
}

function getSubStr(strList, start, end) {
    var subList = [];
    for (var i = start; i < end; i++) {
        subList.push(strList[i]);
    }
    return subList.join('');
}

console.log('absbasa'.substring());
console.log('absbasa'.substring(NaN));
console.log('absbasa'.substring(3, 1));
console.log('absbasa'.substring(undefined, undefined));