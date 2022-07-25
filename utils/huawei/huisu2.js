// 求组合的和
const visited = [];
function getGroup(k, n) {
    if (k === 0 || n === 0) {
        return [];
    }
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const res = [];
    const p = [];
    return huisu(list, k, n, res, p);
}

function huisu(list, k, n, res, p) {
    if (k === p.length) {
        const sum = p.reduce((total, current) => {
            total += current;
            return total;
        }, 0);
        if (sum === n) {
            res.push([...p]);
            return;
        }
    }
    for (let i = 0; i < list.length; i++) {
        p.push(list[i]);
        huisu(list.slice(i + 1), k, n, res, p);
        p.pop();
    }
    return res;
}

console.log(getGroup(3, 9));