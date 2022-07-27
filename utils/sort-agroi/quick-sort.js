function quickSort(arr) {
    return sort(arr, 0, arr.length - 1);
}
// 升序
function sort(arr, left, right) {
    if (left > right) {
        return;
    }
    let i = left;
    let j = right;
    const base = arr[left];
    while (i < j) {
        while (i < j && arr[j] >= base) {
            j--;
        }
        arr[i] = arr[j];
        while (i < j && arr[i] <= base) {
            i++;
        }
        arr[j] = arr[i]
    }
    // 此时i和j相等
    arr[i] = base;
    sort(arr, left, j - 1);
    sort(arr, j + 1, right);
    return arr;
}

exports.quickSort = quickSort;
console.log(quickSort([5, 3, 7, 6, 4, 1, 0, 2, 9, 10, 8]));

function quickSort1(arr) {
    return sort1(arr, 0, arr.length - 1);
}

function sort1(arr, left, right) {
    if (left > right) {
        return arr;
    }
    let i = left;
    let j = right;
    const base = arr[i];
    while (i < j) {
        while (i < j && arr[j] >= base) {
            j--;
        }
        arr[i] = arr[j];
        while (i < j && arr[i] <= base) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = base;
    sort(arr, left, j - 1);
    sort(arr, i + 1, right);
    return arr;
}

function sort2(arr, left, right) {
    if (left > right) {
        return arr;
    }
    let i = left;
    let j = right;
    let base = arr[i];
    while (i < j) {
        if (arr[j] >= base) {
            j--;
        }
        arr[i] = arr[j];
        if (arr[i] <= base) {
            i++;
        }
        arr[j] = arr[i];
    }
    arr[i] = base;
    sort2(arr, left, j - 1);
    sort2(arr, i + 1, right);
}