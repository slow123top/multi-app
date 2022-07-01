import { isFunction } from './check-type.js';
// call函数  第一个参数是要绑定的函数  第二个是this指向   第三个是参数  
function callFunction(func) {
    if (!isFunction(func)) {
        new Error(func + '不是函数')
    }
    let obj = global;
    if (arguments.length > 1) {
        obj = arguments[1];
    }
    const params = Array.from(arguments).slice(2);
    // 确保this是指向obj
    obj.func = func(...params);
    const result = obj.func;
    delete obj.func;
    return result;
}

// apply函数
function applyFunction(func) {
    if (!isFunction(func)) {
        new Error(func + '不是函数')
    }
    let obj = window;
    let param = [];
    if (arguments.length > 1) {
        obj = arguments[1];
    }
    if (arguments.length > 2) {
        param = arguments[2];
    }
    // 确保this是指向obj
    obj.func = func(...param);
    const result = obj.func;
    delete obj.func;
    return result;
}

// bind函数
function bindFunction(func) {
    if (!isFunction(func)) {
        new Error(func + '不是函数')
    }
    let obj = global;
    if (arguments.length > 1) {
        obj = arguments[1];
    }
    const params = Array.from(arguments).slice(2);
    function a() {
        // 如果是new绑定的函数  实际是new的func
        if (this instanceof a) {
            // 实现new func()
            // 这里实际就是new函数的时候要做哪些事情
            // 1、新建一个空对象   2、空对象的原型指向函数的原型 3、该函数绑定空对象的this 
            // 4、谁是对象就返回谁
            // const obj = new Object();
            // obj.__proto__ = func.prototype;  或者也可以如下写法
            const obj = Object.create(func.prototype);
            obj.constructor = func;
            const result = func.call(obj);
            return result !== null && (typeof result === 'object' || typeof result === 'function') ?
                result : obj;
        }
        // 直接调用绑定的函数
        return func.apply(obj, params);
    }
    return a;
}

function b() {
    console.log(this.cc);
}

bindFunction(b, { cc: 33 })();

export { callFunction, applyFunction, bindFunction };
