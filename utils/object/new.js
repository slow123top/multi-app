/**
 * 自己实现的
 * @param {*} ctor 
 * @returns 
 */
function hNew(ctor) {
    if (typeof ctor !== 'function') {
        throw Error(ctor + 'is not a function');
    }
    // 新建一个对象
    // const 
    if (typeof ctor.prototype !== 'object') {
        throw Error(ctor + '.prototype is not a object');
    }

    if (ctor.prototype === null) {
        throw Error(ctor + '.prototype can not a null');
    }

    var fn = ctor;
    var obj = {};
    obj.__proto__ = ctor.prototype;
    var restArgs = [];
    if (arguments.length > 1) {
        var args = [].slice.call(arguments);
        restArgs = args.slice(1);
    }
    // 绑定this
    var result = fn.apply(obj, restArgs);
    // 要执行构造函数一遍
    if ((typeof result === 'object' && result !== null) || typeof result === 'function') {
        return result;
    }
    return obj;
}

/**
 * 别人实现的
 * @param {*} ctor 
 * @returns 
 */
function newOperator(ctor) {
    if (typeof ctor !== 'function') {
        throw 'newOperator function the first param must be a function';
    }
    newOperator.target = ctor;
    var newObj = Object.create(ctor.prototype);
    var argsArr = [].slice.call(arguments, 1);
    var ctorReturnResult = ctor.apply(newObj, argsArr);
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if (isObject || isFunction) {
        return ctorReturnResult;
    }
    return newObj;
}