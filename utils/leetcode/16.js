// 最接近的三数之和
function sanshuzhihe(arr, target) {
    if (!arr || !arr.length) {
        return 0;
    }
    const p = [];
    const res = [Infinity], visited = [];
    return getGroup(arr, p, res, target, visited);
}

function getGroup(arr, p, res, target, visited) {
    if (p.length === 3) {
        const sum = p.reduce((total, current) => {
            total = total + current;
            return total;
        }, 0);
        const cha = Math.abs(sum - target);
        if (cha < Math.abs(res[0] - target)) {
            res.pop();
            res.push(sum);
        }
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
            p.push(arr[i]);
            visited[i] = true;
            getGroup(arr, p, res, target, visited);
            p.pop();
            visited[i] = false;
        }
    }
    return res[0];
}

console.log(sanshuzhihe([-100,-98,-2,-1], -101));