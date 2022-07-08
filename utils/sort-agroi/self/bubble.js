function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // 由于最后一次不用循环  已经确定位置了  所以最大值需要减一
        // 如果中间有一次没有进行位置的调整   说明已经排序完成  就不用进行下面的循环了  所以加一个标志位
        let change = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                // 注意两者的顺序  先给a[j]赋值
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                change = true;
            }
        }
        if (!change) {
            break;
        }
    }
    return arr;
}

console.log(bubble([1, 2, -1, 0, 4, 3, 8]));