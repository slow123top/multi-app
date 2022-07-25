function ip(str) {
    if (str === '0000') {
        return ['0.0.0.0'];
    }
    const p = [];
    const res = [];
    return getGroup(str, p, res, str.length);
}

function getGroup(str, p, res, len) {
    if (p.length === 4 && p.join('').length === len) {
        res.push([...p].join('.'));
        return;
    }

    for (let i = 1; i <= str.length; i++) {
        const pre = str.slice(0, i);
        if (pre[0] === '0' && pre !== '0') {
            continue;
        }
        if (pre >= 0 && pre <= 255) {
            p.push(str.slice(0, i));
            getGroup(str.slice(i), p, res, len);
            p.pop();
        }
    }
    return res;
}

console.log(ip('101023'));