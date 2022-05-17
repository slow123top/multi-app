const huiwen = (s) => {
    let len = s.length;
    let temp = s;
    let pre = '';
    let last = '';
    let huiwen = '';
    for (let i = 0; i < len; i++) {
        let j = len;
        if (huiwen.length >= j - i) {
            continue;
        }
        while (j > i) {
            temp = s.slice(i, j);
            if (Math.floor(temp.length % 2) === 1) {
                // 奇数字符串
                const mid = Math.floor((temp.length + 1) / 2);
                pre = temp.slice(0, mid - 1);
                last = temp.slice(mid);
            } else {
                // 偶数字符串
                const mid = Math.floor(temp.length / 2);
                pre = temp.slice(0, mid);
                last = temp.slice(mid);
            }
            if (pre === last.split('').reverse().join('') && huiwen.length < temp.length) {
                huiwen = temp;
                // 用于跳出while
                j = i + 1;
            }
            j--;
        }
    }
    return huiwen;
}

console.log(huiwen('cbbd'))
console.log(huiwen('aba'))
console.log(huiwen('abacawefewadds'))