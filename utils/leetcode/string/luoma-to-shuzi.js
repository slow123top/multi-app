function luomaToalabo(str) {
    if (str === '') {
        return 0;
    }
    const group = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let temp = '';
    let index = 0;
    let special = 0;
    let shuzi = 0;
    while (str.length) {
        const siIndex = str.indexOf('IV');
        const jiuIndex = str.indexOf('IX');
        const sishiIndex = str.indexOf('XL');
        const jiushiIndex = str.indexOf('XC');
        const sibaiIndex = str.indexOf('CD');
        const jiubaiIndex = str.indexOf('CM');
        const min = Math.min(...([siIndex, jiuIndex, sishiIndex, jiushiIndex, sibaiIndex, jiubaiIndex].filter(item => item > -1)));
        if (siIndex > -1 && siIndex === min) {
            index = siIndex;
            special = 4;
            temp = str.slice(index + 2);
        } else if (jiuIndex > -1 && jiuIndex === min) {
            index = jiuIndex;
            special = 9;
            temp = str.slice(index + 2);
        } else if (sishiIndex > -1 && sishiIndex === min) {
            index = sishiIndex;
            special = 40;
            temp = str.slice(index + 2);
        } else if (jiushiIndex > -1 && jiushiIndex === min) {
            index = jiushiIndex;
            special = 90;
            temp = str.slice(index + 2);
        } else if (sibaiIndex > -1 && sibaiIndex === min) {
            index = sibaiIndex;
            special = 400;
            temp = str.slice(index + 2);
        } else if (jiubaiIndex > -1 && jiubaiIndex === min) {
            index = jiubaiIndex;
            special = 900;
            temp = str.slice(index + 2);
        } else {
            index = str.length;
            special = 0;
            temp = str.slice(str.length);
        }
        console.log(index);
        // 裁剪
        for (let i = 0; i < index; i++) {
            shuzi += group[str[i]];
        }
        shuzi += special;
        str = temp;
    }
    return shuzi;
}

console.log(luomaToalabo('III'));