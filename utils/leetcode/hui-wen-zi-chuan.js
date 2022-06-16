/**
 * 查找回文子串
 * @param {*} str 
 */
function huiwen(str) {
    if (!str || str.length < 1) {
        return '';
    }
    if (str.length === 1) {
        return str;
    }
    let maxLens = 0;
    let maxStr = '';
    for (let i = 0; i < str.length; i++) {
        if ((str.length - i) <= maxLens) {
            return maxStr;
        }
        for (let j = str.length; j > 0; j--) {
            const strA = str.slice(i, j);
            const isHuiWenStr = isHuiWen(strA);
            if (isHuiWenStr && strA.length > maxLens) {
                maxLens = strA.length;
                maxStr = strA;
                j = 0;
            }
        }
    }
    return maxStr;
}

function isHuiWen(str) {
    const len = str.length;
    if (len > 0) {
        const mod = Math.floor(len % 2);
        const mid = Math.floor(len / 2);
        if (mod === 1) {
            return str.slice(0, mid).split('').reverse().join('') === str.slice(mid + 1);
        }
        return str.slice(0, mid).split('').reverse().join('') === str.slice(mid);
    }
    return false;
}

console.log(huiwen('bacabab'));