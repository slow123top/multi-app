function konggezifuchuan(str) {
    if (!str) {
        // 空字符串
        return '';
    }
    const reverseArr = [];
    while (str.indexOf(' ') === 0) {
        // 开头是空格 移除
        str = str.slice(1);
    }
    while (str.lastIndexOf(' ') === str.length - 1) {
        // 结尾是空格 移除
        str = str.slice(0, str.length - 1);
    }
    let startIndex = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            if (str[i - 1] !== ' ') {
                reverseArr.unshift(str.slice(startIndex, i));
            }
            startIndex = i + 1;
        }
    }

    if (startIndex < str.length) {
        reverseArr.unshift(str.slice(startIndex, str.length));
    }

    return reverseArr.join(' ');
}

console.log(konggezifuchuan("a good   example"));