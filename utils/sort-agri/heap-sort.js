
function heapSort(arr) {
    const list = [];
    while (arr.length) {
        const len = arr.length;
        const tempArr = buildHeap(arr);
        const temp = tempArr[0];
        tempArr[0] = tempArr[len - 1];
        tempArr[len - 1] = temp;
        list[len - 1] = tempArr.splice(len - 1, 1)[0];
    }

    return list;
}
/**
 * 堆排序  升序
 * @param {*} arr 
 */
function buildHeap(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // 构造大根堆  最大堆
    for (let i = 1; i < arr.length; i++) {
        let parentIndex = Math.floor((i - 1) / 2);
        let j = i;
        while (arr[parentIndex] < arr[j] && parentIndex >= 0) {
            const temp = arr[parentIndex];
            arr[parentIndex] = arr[j];
            arr[j] = temp;
            j = parentIndex;
            parentIndex = Math.floor((j - 1) / 2);
        }
    }
    console.log(arr);
    return arr;
}
// 根节点和尾部交换  移除尾节点

function swap(a, b) {
    const temp = a;
    a = b;
    b = temp;
}

console.log(heapSort([8, 5, 3, 2, 1]));