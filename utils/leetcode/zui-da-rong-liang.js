function zuidarongliang(arr) {
    const res = [];
    const p = [];
    const visited = [];
    return getMainByMany(arr, p, res, visited);
}

function getMainByMany(arr, p, res, visited) {
    if (p.length === 2) {
        p[0] = [...p[0]];
        p[1] = [...p[1]];
        p = [...p];
        const mianji = Math.floor(Math.abs(p[0][0] - p[1][0]) * Math.min(p[0][1], p[1][1]));
        res.push(mianji);
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if (!visited[i]) {
            // 存储索引和元素
            p.push([i, arr[i]]);
            visited[i] = true;
            getMainByMany(arr, p, res, visited);
            p.pop();
            visited[i] = false;
        }
    }
    return Math.max(...res);
}
console.log(zuidarongliang([1, 1]));