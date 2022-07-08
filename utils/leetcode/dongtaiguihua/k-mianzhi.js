function kMZ(mianzhiList, sum = 10) {
    const len = mianzhiList.length;
    const arr = [];
    arr[0][0] = 0;
    arr[1][sum] = sum;
    let count = 0;
    for (let i = 0; i < len; i++) {
        // （i+1）种面值
        sum -
    }
    return count;
}

const a = [];

function one(sum,) {
    if ((sum - 0) % list[0] === 0) {
        return 1;
    }
    return 0;
}

function two(list, sum, m) {
    if (list.length === 1) {
        if (sum % list[0] === 0) {
            return 1;
        }
        return 0;
    }
    if (list.length === 2) {
        const max = Math.max(list[0], list[1]);
        const min = Math.min(list[0], list[1]);
        const k = Math.floor(sum / max);
        const count;
        for (let i = 0; i < k; i++) {
            if ((sum - i * min1 - j * min2) % max === 0) {
                count++;
            }
        }
    }
}

function getSum(list, sum, j) {
    if (list.length === 1) {
        if (sum % list[0] === 0) {
            return sum;
        }
        return 0;
    }
    const last = list[list.length - 1];
    return getSum(list.slice(0, list.length - 1), sum - last * j) + last * j;
}

