function panduanHuiWen(num) {
    if (num < 0) {
        return false;
    }
    const temp = num;
    let res = [];
    while (num !== 0) {
        const mod = Math.floor(num % 10);
        res.push(mod);
        num = Math.floor(num / 10);
    }
    return +(res.join('')) === temp;
}
console.log(panduanHuiWen(10));

function panduanHuiwen1(num) {
    const numStr = num + '';
    return numStr.split('').reverse().join('') === numStr;
}