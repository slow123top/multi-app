function sanshuzhihe(list) {
    if (!list.length || (list.length === 1 && list[0] === 0)) {
        return [];
    }
    // 双重循环
    const result = [];
    let lastIndex = '', lastI = '', lastJ = '';
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            const cha = -Math.floor(list[i] + list[j]);
            const index = list.indexOf(cha);
            if (index > -1 && index !== i && index !== j) {
                result.push([list[i], list[j], list[index]]);
            }
        }
    }
    return quchong(result);
}

function quchong(list) {
    let temp = [];
    while (list.length) {
        let first = list.shift();
        temp.push(first);
        let base = first.sort((a, b) => a - b).join('');
        for (let i = list.length - 1; i >= 0; i--) {
            const str = list[i].sort((a, b) => a - b).join('');
            console.log(i);
            if (base === str) {
                list.splice(i, 1);
            }
        }
    }
    return temp;
}
console.log(quchong([
    [-1, 1, 0],
    [-1, -1, 2],
    [0, 1, -1],
    [0, -1, 1],
    [-1, 0, 1],
    [-1, -1, 2]
]));