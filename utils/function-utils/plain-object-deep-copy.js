import { dataType } from './check-type.js';
import { isPlainObject } from './plain-object.js';
/**
 * 深拷贝  Object.assign只能深拷贝一层
 * @param {*} value  
 * @returns 
 */
export function deepCopy(value) {
    if (isArray(value)) {
        return deepCopyArray(value);
    } else if (isPlainObject(value)) {
        return deepCopyPlainObject(value);
    } else {
        return value;
    }
}

function isArray(value) {
    return Array.isArray && Array.isArray(value) || (dataType(value) === 'Array');
}

function deepCopyArray(array) {
    let res = [];
    for (const item of array) {
        let deep;
        if (isPlainObject(deep)) {
            deep = deepCopyPlainObject(item);
        } else if (isArray(item)) {
            deep = deepCopyArray(item);
        } else {
            deep = item;
        }
        res.push(deep);
    }
    return res;
}

function deepCopyPlainObject(object) {
    const keys = Object.keys(object);
    const cloneObj = {};
    for (var i = 0; i < keys.length; i++) {
        if (!isArray(object[keys[i]]) && !isPlainObject(object[keys[i]])) {
            cloneObj[keys[i]] = object[keys[i]];
        } else if (isArray(object[keys[i]])) {
            cloneObj[keys[i]] = deepCopyArray(object[keys[i]])
        } else if (isPlainObject(object[keys[i]])) {
            cloneObj[keys[i]] = deepCopyPlainObject(object[keys[i]])
        }
    }
    return cloneObj;
}

const obj = { a: { b: 1 }, c: [2, { r: 4, t: 0 }] };
const obj1 = [1, 2, 3, '45', { r: 3, f: { e: 9, i: 0 } }];
// console.log(deepCopy(obj1));
// console.log(deepCopy(obj) === obj);

function deepClone(obj) {
    if (!obj || typeof obj !== 'object') {
        return {};
    }
    if (isArr(obj)) {
        return deepCloneArray(obj);
    } else if (plainObject(obj)) {
        return deepCloneObject(obj);
    }
}
const isArr = Array.isArray;
const plainObject = (obj) => {
    return typeof obj === 'object' && obj !== null;
}

const deepCloneArray = (arr) => {
    const colnedArr = [];
    for (let i = 0; i < obj.length; i++) {
        const value = arr[i];
        if (isArray(value)) {
            colnedArr[i] = deepCopyArray(value);
        } else if (plainObject(value)) {
            colnedArr[i] = deepCloneObject(value);
        } else {
            colnedArr[i] = value;
        }
    }
    return colnedArr;
}

const deepCloneObject = (obj) => {
    const colnedObj = {};
    const keyList = Object.keys(obj);
    for (let i = 0; i < keyList.length; i++) {
        const key = keyList[i];
        const value = obj[key];
        if (isArray(value)) {
            colnedObj[key] = deepCopyArray(value);
        } else if (plainObject(value)) {
            colnedObj[key] = deepCloneObject(value);
        } else {
            colnedObj[key] = value;
        }
    }
    return colnedObj;
}
const aa = { a: { w: 2, e: 44 } };
console.log(deepClone(aa) === aa);