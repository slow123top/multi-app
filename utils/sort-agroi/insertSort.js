// 插入排序
// 升序
function ascByInsertSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i;
        let current = arr[i];
        while (j > 0 && current < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}


// 降序
function desByInsertSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let j = i;
        let current = arr[i];
        while (j > 0 && current > arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}
console.log(ascByInsertSort([3, 2, -2, -1, 1, 5, 3, 0, -1]));
console.log(desByInsertSort([3, 2, -2, -1, 1, 5, 3, 0, -1]));