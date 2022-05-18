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
console.log(deepCopy(obj1));
console.log(deepCopy(obj) === obj);


