/**
 * 深拷贝  Object.assign只能深拷贝一层
 * @param {*} value  
 * @returns 
 */
function cloneDeep(value) {
    // 如果是不合法的  直接返回
    if (!isObj(value)) {
        return value;
    }
    // 如果是Array类型
    if (isArray(value)) {
        // eslint-disable-next-line no-undef
        return cloneArray(value);
    }
    // 如果是纯Object类型
    const keys = Object.keys(value);
    const cloneObj = {};
    for (var i = 0; i < keys.length; i++) {
        if (!isArray(value[keys[i]]) && !isObj(value[keys[i]])) {
            cloneObj[keys[i]] = value[keys[i]];
        } else {
            cloneObj[keys[i]] = arguments.callee(value[keys[i]])
        }
    }
    return cloneObj;
}
// 包含Function  Rex Date Array等
function isObj(value) {
    return typeof value === 'object' && value !== null;
}

function isArray(value) {
    return Array.isArray(value);
}

function cloneArray(val) {
    let res = [];
    val.forEach((element, index) => {
        if (typeof element === 'string' || typeof element === 'number') {
            res[index] = element;
        } else {
            res[index] = cloneDeep(element);
        }
    });
    return res;
}

const obj = { a: { b: 1 }, c: [2, { r: 4, t: 0 }] };
const obj1 = [1, 2, 3, '45', { r: 3, f: { e: 9, i: 0 } }];
console.log(cloneDeep(obj1));
console.log(cloneDeep(obj) === obj);


