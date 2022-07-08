function zuichanggonggongqianzhui(strs) {
    if (!strs) {
        return '';
    }
    let minLenStr = strs[0];
    let minLenStrIndex = 0;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minLenStr.length) {
            minLenStr = strs[i];
            minLenStrIndex = i;
        }
    }
    let qianzhui = '';
    let list = strs.filter((item, index) => index !== minLenStrIndex);
    console.log(list);
    while (minLenStr.length) {
        const first = minLenStr[0];
        const all = list.every(item => item.indexOf(first) === 0);
        if (all) {
            qianzhui += first;
            minLenStr = minLenStr.slice(1);
            for (let i = 0; i < list.length; i++) {
                list[i] = list[i].slice()
            }
            console.log(minLenStr);
        } else {
            break;
        }
    }
    return qianzhui;
}
console.log(zuichanggonggongqianzhui(['flower', 'flxow']));