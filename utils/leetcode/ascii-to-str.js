function asciiToStr() {

}

function feibonaqie(str) {
    const len = str.length;
    const list = [];
    let res = '';
    let newStr = '';
    let mod = 0;
    for (let i = 0; i < len; i++) {
        if (i === 0 || i === 1) {
            list[i] = 1;
        } else {
            list[i] = list[i - 1] + list[i - 2];
        }
        // 根据list的值获取加密的字符串
        const ascii = str[i].charCodeAt();
        const newAscii = Math.floor(ascii + list[i]);
        if (ascii >= 97 && ascii <= 122) {
            // 小写字母
            if (newAscii > 122) {
                mod = Math.floor(newAscii - 122);
                newStr = String.fromCharCode(Math.floor(96 + mod));
            } else {
                newStr = String.fromCharCode(newAscii);
            }
        }
        if (ascii >= 65 && ascii <= 90) {
            // 大写字母
            if (newAscii > 90) {
                mod = Math.floor(newAscii - 90);
                newStr = String.fromCharCode(Math.floor(64 + mod));
            } else {
                newStr = String.fromCharCode(newAscii);
            }
        }
        res += newStr;
    }
    return res;
}

console.log(feibonaqie('ABCcde'));