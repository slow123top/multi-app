export function reverse(arr) {
    const mid = Math.floor(arr.length / 2);
    let i = 0;
    let temp;
    while (i < mid) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        i++;
    }
    return arr;
}

console.log(reverse([1, 2, 3, 4, 6]));

