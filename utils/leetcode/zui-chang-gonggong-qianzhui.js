function zuichangqianzhui(strs) {
    if (strs.indexOf('') > -1) {
        // 有空元素   直接返回''
        return '';
    }
    let minLengthStr = '';
    strs.reduce((total, next, index, array) => {
        minLengthStr = next;
        return Math.min(total, next.length);
    }, 0);
    // 拿到最短元素前缀
    for (let i = 1; i <= minLengthStr.length; i++) {
        let gonggong = minLengthStr.slice(0, i);
        const isGonggong = strs.every(item => {
            return item.slice(0, i) === gonggong;
        });
        if (!isGonggong) {
            return gonggong.slice(0, gonggong.length - 1);
        }
    }
    return minLengthStr;
}

console.log(zuichangqianzhui(["flower", "flow", "flight"]))