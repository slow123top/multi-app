
// 1数之和  其实就是寻找跟target相等的元素
function yishuzhihe(arr, target) {
    const exist = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target && !exist[arr[i]]) {
            result.push([arr[i]]);
            exist[arr[i]] = true;
        }
    }
    return result;
}

// 两数之和  
function ershuzhihe(arr, target) {
    const result = [];
    const exist = {};
    for (let i = 0; i < arr.length - 1; i++) {
        const rest = target - arr[i];
        const after = arr.slice(i + 1);
        const result1 = yishuzhihe(after, rest);
        if (result1.length && result1[0].length === 1) {
            result1[0].push(arr[i]);
            const str = result1[0].sort((a, b) => a - b).join('');
            if (!exist[str]) {
                exist[str] = true;
                result.push(result1[0]);
            }
        }
        // exist[arr[i]] = true;
        // for (let j = i + 1; j < arr.length; j++) {
        //     if (arr[i] + arr[j] === target && !exist[arr[j]]) {
        //         result.push([arr[i], arr[j]]);
        //         exist[arr[j]] = true;
        //     }
        // }
    }
    // 去重
    return result;
}

// 三数之和
function sanshuzhihe(arr, target) {
    const result = [];
    const exist = {};
    for (let i = 0; i < arr.length - 2; i++) {
        const rest = target - arr[i];
        const after = arr.slice(i + 1);
        const result1 = ershuzhihe(after, rest);
        if (result1.length) {
            // result1[0].push(arr[i]);
            result1.forEach(r => {
                r.push(arr[i]);
                const str = r.sort((a, b) => a - b).join('');
                if (!exist[str]) {
                    exist[str] = true;
                    result.push(r);
                }
            })
        }
        // for (let j = i + 1; j < arr.length - 1; j++) {
        //     const rest = arr.slice(j + 1);
        //     const cha = Math.floor(target - (arr[i] + arr[j]));
        //     const k = rest.indexOf(cha);
        //     if (k > -1) {
        //         // 排序后比较字符串是否存在
        //         const sortArr = [arr[i], arr[j], rest[k]].sort((a, b) => a - b);
        //         const sortStr = sortArr.join('');
        //         if (!exist[sortStr]) {
        //             exist[sortStr] = true;
        //             result.push(sortArr);
        //         }
        //     }
        // }
    }
    return result;
}
// 四个数字之和
function sishuzhihe(arr, target) {
    if (!arr.length || arr.length < 4) {
        return [];
    }
    const result = [];
    const exist = {};
    for (let i = 0; i < arr.length - 3; i++) {
        // for (let j = i + 1; j < arr.length - 2; j++) {
        //     for (let k = j + 1; k < arr.length - 1; k++) {
        //         for (let l = k + 1; l < arr.length; l++) {
        //             if (arr[i] + arr[j] + arr[k] + arr[l] === target) {
        //                 const sortArr = [arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b);
        //                 const sortStr = sortArr.join('');
        //                 if (!exist[sortStr]) {
        //                     exist[sortStr] = true;
        //                     result.push(sortArr);
        //                 }
        //             }
        //         }
        //     }
        // }
        const rest = target - arr[i];
        const after = arr.slice(i + 1);
        const result1 = sanshuzhihe(after, rest);
        if (result1.length) {
            // result1[0].push(arr[i]);
            result1.forEach(r => {
                r.push(arr[i]);
                const str = r.sort((a, b) => a - b).join('');
                if (!exist[str]) {
                    exist[str] = true;
                    result.push(r);
                }
            })
        }
    }
    return result;
}

function getSum(arr, n, target) {
    let sum = [];
    if (n === 1) {
        const value = arr.find(item => item === target);
        sum = value === undefined ? [] : [[value]];
        return sum;
    }
    const isExist = {};
    for (let j = 0; j < arr.length - n + 1; j++) {
        const preSum = getSum(arr.slice(j + 1), n - 1, target - arr[j]);
        console.log(preSum);
        if (!preSum.length) {
            continue;
        } else {
            // 
            preSum.forEach(s => {
                s.push(arr[j]);
                // console.log(s);
                const everySum = s.reduce((total, next) => {
                    total += next;
                    return total;
                }, 0);
                const str = s.sort((a, b) => a - b).join('');
                if (!isExist[str] && everySum === target) {
                    // console.log(isExist);
                    isExist[str] = true;
                    // 
                    sum.push(s);
                }

            })
        }
    }
    return sum;
}
// 暴力破解
// for (let i = 0; i < arr.length - n + 1; i++) {
//     for (let j = i + 1; j < arr.length - 2; j++) {
//         for (let k = j + 1; k < arr.length - 1; k++) {
//             for (let l = k + 1; l < arr.length; l++) {
//                 if (arr[i] + arr[j] + arr[k] + arr[l] === target) {
//                     const sortArr = [arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b);
//                     const sortStr = sortArr.join('');
//                     if (!exist[sortStr]) {
//                         exist[sortStr] = true;
//                         result.push(sortArr);
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(yishuzhihe([1, 2, 3, 3, 2, 4, 8, 0, 1], 10));
console.log(getSum([1, 2, 3, 3, 2, 4, 8, 0, 1, 2], 4, 4));
// console.log(sanshuzhihe([1, 2, 3, 3, 2, 4, 8, 0, 1], 8));
// console.log(sishuzhihe([1, 2, 3, 3, 2, 4, 8, 0, 1], 10));