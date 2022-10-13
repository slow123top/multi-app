function atoi(str) {
    // 移除前置空格
    let i = 0;
    while (str[i] === ' ') {
        i++;
    }
    str = str.slice(i);
    const num = parseInt(str);
    if (isNaN(num)) {
        // 空字符串
        return 0;
    }
    // 确定正负
    let number = str;
    let symbol = '';
    if (str[i] === '-') {
        number = str.slice(i + 1);
        symbol = '-';
    }
    number = Number(symbol + parseInt(number));
    if (number < -(2 ** 31)) {
        return -(2 ** 31);
    }
    if (number > (2 ** 31 - 1)) {
        return 2 ** 31 - 1;
    }
    return number;
    // 转换成数字
    // 边界大小
}
console.log(atoi('    -32 asdas'));
