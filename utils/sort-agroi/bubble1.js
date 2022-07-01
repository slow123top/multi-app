function bubble1(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            const value1 = arr[j];
            const value2 = arr[j + 1];
            if (value1 > value2) {
                const temp = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubble1([2, 1, -1, 4, 5]))

function quickSort(arr){
    
}