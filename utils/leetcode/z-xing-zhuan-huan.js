// Z字型排列
function zXingZhuanHuan(s, numRows) {
    const len = s.length;
    if (s <= numRows) {
        return s;
    }
    const group = numRows + numRows - 2;
    let columns = Math.floor(len / group);
    const rest = Math.floor(len % group);
    let result = '';
    if (rest) {
        columns += 1;
    }
    for (let i = 0; i < columns; i++) {
        result += s[i * group];
    }
    for (let j = 1; j < numRows - 1; j++) {
        for (let k = 0; k < columns; k++) {
            result += (s[k * group + j] ? s[k * group + j] : '') + (s[(k + 1) * group - j] ? s[(k + 1) * group - j] : '');
            console.log(s[(k + 1) * group - j]);
        }
    }
    for (let i = 0; i < columns; i++) {
        result += s[i * group + ((group - 2) / 2) + 1] ? s[i * group + ((group - 2) / 2) + 1] : '';
    }

    return result;
}

console.log(zXingZhuanHuan('PAYPALISHIRING', 1))