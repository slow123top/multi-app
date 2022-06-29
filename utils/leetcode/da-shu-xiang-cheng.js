function dashuxiangcheng(num1, num2) {
    // 有一个是0  结果就是0
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    const num1ToArray = num1.split('');
    const num2ToArray = num2.split('');
    let sum = [];
    let result = [];
    const num2Len = num2ToArray.length;
    for (let i = num2Len - 1; i >= 0; i--) {
        const num2A = num2ToArray[i];
        let quotient = 0;
        const rest = (new Array(num2Len - 1 - i)).fill(0);
        result = [].concat(rest);
        for (let j = num1ToArray.length - 1; j >= 0; j--) {
            // num2的一位乘以num1的每一位
            const res = (+num1ToArray[j]) * num2A + quotient;
            result.unshift(res % 10);
            quotient = Math.floor(res / 10);
        }
        if (quotient) {
            result.unshift(quotient);
        }
        console.log(result);
        sum = dashuxiangjia(sum, result).split('');
    }
    return sum.join('');
}

function dashuxiangjia(arr1, arr2) {
    if (typeof arr1 === 'string') {
        arr1 = arr1.split('');

    }
    if (typeof arr2 === 'string') {
        arr2 = arr2.split('');
    }
    if (arr1.length > arr2.length) {
        arr2.unshift(...((new Array(arr1.length - arr2.length)).fill(0)));
    }
    if (arr2.length > arr1.length) {
        arr1.unshift(...((new Array(arr2.length - arr1.length)).fill(0)));
    }
    const result = [];
    let quotient = 0;
    for (let i = arr1.length - 1; i >= 0; i--) {
        const currentArr1 = Number(arr1[i]);
        const currentArr2 = Number(arr2[i]);
        const sum = currentArr1 + currentArr2;
        result.unshift((sum + quotient) % 10);
        quotient = Math.floor((sum + quotient) / 10);
    }
    if (quotient) {
        result.unshift(quotient);
    }
    return result.join('');
}

console.log(dashuxiangcheng('123456789',
    '987654321'));