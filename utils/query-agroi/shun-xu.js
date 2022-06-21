function shunxu(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (i === value) {
            return i;
        }
    }
    return -1;
}