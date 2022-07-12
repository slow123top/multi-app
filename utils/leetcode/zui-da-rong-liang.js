function zuidarongliang(arr) {
    if (!arr || arr.length < 2) {
        return 0
    }
    if (arr.length === 2) {
        return Math.min(arr[0], arr[1]);
    }
    let max = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const chang = Math.abs(i - j);
            const height = Math.min(arr[i], arr[j]);
            const mianji = Math.floor(chang * height);
            max = Math.max(mianji, max);
        }
    }
    return max;
}

console.log();

function getMianjiBy2(arr, width) {
    const height = Math.min(...arr);
    const mianji = Math.floor(height * width);
    return mianji;
}

function getMainByMany(arr) {
    const len = arr.length;
    // 代表前i个元素的最大面积
    const mianji = [];
    mianji[0] = 0;
    mianji[1] = 0;
    mianji[2] = arr[0] > arr[1] ? arr[1] : arr[0];
    for (let j = 3; j <= len; j++) {
        let max = mianji[j - 1];
        for (let i = 0; i < j - 1; i++) {
            // 前i个分别和最后一个比较
            const newValue = getMianjiBy2([arr[i], arr[j - 1]], j - 1 - i);
            if (max < newValue) {
                max = newValue;
            }
        }
        mianji[j] = max;
    }
    return mianji[len];
}
console.log(getMainByMany([2, 3, 4, 5, 18, 17, 6]));