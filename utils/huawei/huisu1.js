function group(arr, index, p, res = [], visit) {
    if (!arr || !arr.length) {
        return [];
    }
    if (index === arr.length) {
        res.push([...p]);
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        if (!visit[i]) {
            p.push(arr[i]);
            visit[i] = true;
            group(arr, index + 1, p, res, visit);
            p.pop();
            visit[i] = false;
        }
    }
}

function getGroup(arr) {
    const res = [];
    let visit = new Array(arr.length);
    visit.fill(false);
    group(arr, 0, [], res, visit);
    return res;
}

console.log(getGroup(['a', 'b', 'c', 'd']));