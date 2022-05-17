const erfenchazhao = (str, arr) => {
    let right = arr.length;
    let left = 0;
    while (left <= right) {
        const mid = Math.floor(Number((left + right) / 2));
        console.log(mid);
        if (str === arr[mid]) {
            return mid;
        } else if (str < arr[mid]) {
            right = mid - 1;
        } else if (str > arr[mid]) {
            left = mid + 1;
        }
    }
    return -1;
}

console.log(erfenchazhao(2, [-2, -1, 0, 2, 3]));