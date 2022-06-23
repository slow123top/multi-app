function baohan(s1, s2) {
    if (s1 === '') {
        return true;
    }
    const s1Len = s1.length;
    const s2Len = s2.length;
    for (let i = 0; i <= s2Len - s1Len; i++) {
        const childStr = s2.slice(i, i + s1Len);
        if (!checkStr(s1, childStr)) {
            return true;
        }
    }
    return false;
}

function checkStr(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        const index = s2.indexOf(s1[i]);
        console.log(index);
        if (index > -1) {
            // s1 = s1.slice(0, i) + s1.slice(i + 1);
            s2 = s2.slice(0, index) + s2.slice(index + 1);
        } else {
            return s2;
        }
    }
    console.log(s2);
    return s2;
}


console.log(baohan('adc', 'dcda'));