var reverse = function (x) {
    let str = x.toString();
    let symbol = '';
    if (x < 0) {
        symbol = str.slice(0, 1);
        str = str.slice(1);
    }
    let result = str.split('').reverse().join('');
    result = Number(symbol + result);
    if (result > 2 ** 31 || result < -(2 ** 31)) {
        return 0;
    }
    return result;
};

console.log(reverse(1534236469));