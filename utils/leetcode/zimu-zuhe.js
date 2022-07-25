/* 字母组合 */
function zimuZuhe(str) {
    if (!str || !str.length) {
        return [];
    }
    // '234'  '23'
    const group = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    if (str.length === 1) {
        return group[str[0]];
    }
    let base = group[str[0]];
    for (let i = 1; i < str.length; i++) {
        const values = group[str[i]];
        let result = [];
        for (let j = 0; j < base.length; j++) {
            for (let k = 0; k < values.length; k++) {
                result.push(base[j] + values[k]);
            }
        }
        base = result;
    }
    return base;
}

function zimuZuhe1(str) {
    if (!str || !str.length) {
        return [];
    }
    // '234'  '23'
    const group = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    const res = [];
    const p = [];
    zuhe(str, res, p, group, str.length);
    return res;
}

function zuhe(str, res, p, group, total) {
    if (p.length === total) {
        res.push([...p].join(''));
        return;
    }
    for (let i = 0; i < str.length; i++) {
        const value = group[str[i]];
        for (let j = 0; j < value.length; j++) {
            p.push(value[j]);
            zuhe(str.slice(i + 1), res, p, group, total);
            p.pop();
        }
    }
    return res;
}

console.log(zimuZuhe1('239'));