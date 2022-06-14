// 数组去重  数组或者字符串
import { dataType } from './check-type.js';
function valueDeduplication(value) {
    const valueType = dataType(value);
    const result = {};
    if (valueType === 'Array') {
        // 数组去重
        const tempArray = [];
        for (const item of value) {
            if (!(item in result)) {
                // 借助于result对象判断属性是否存在的方法  而不是直接判断数组是否存在  因为会有数组中有0的情况
                result[item] = true;
                tempArray.push(item);
            }
        }
        return tempArray;
    }
    if (value[Symbol.iterator]) {
        let str = '';
        // 字符串
        const iterator = value[Symbol.iterator]();
        let nextValue = iterator.next();
        while (!nextValue.done) {
            console.log(nextValue.value);
            const finalValue = nextValue.value;
            if (!(finalValue in result)) {
                result[finalValue] = true;
                str += finalValue;
            }
            nextValue = iterator.next();
        }
        return str;
    }
    if (valueType === 'String') {
        let str = '';
        // 如果不存在Symbol.iterator
        for (const item of value) {
            if (!(item in result)) {
                result[item] = true;
                str += item;
            }
        }
        return str;
    }
    // new Error('不可迭代  无法去重！');
}

console.log(valueDeduplication('abbbbscdddedessfegfg'))