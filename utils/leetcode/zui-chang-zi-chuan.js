const checkStr = function (s) {
    // 存储子串长度
    const arr = [];
    // 存储当前字串
    let strArr = [];
    for (let strItem of s) {
        if (!strArr.includes(strItem)) {
            strArr.push(strItem);
        } else {
            arr.push(strArr.length);
            const index = strArr.indexOf(strItem);
            strArr.reverse().length = strArr.length - index - 1;
            strArr.reverse();
            strArr.push(strItem);
        }
    }
    // 处理边界问题   到头的时候  要把长度添加
    if (strArr.length) {
        arr.push(strArr.length);
    }
    // 
    if (!arr.length) {
        return 0;
    }
    return Math.max(...arr);
}

console.log(checkStr('dvdf'));
