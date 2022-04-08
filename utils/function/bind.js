// function bind(context) {
//     var func = Object(this);
//     return function () {
//         // return func.apply(context);
//         return func.call(context);
//     }
// }
var arraySlice = [].slice;
var factories = {};

Function.prototype.bind = function (that) {
    // 绑定的是一个函数
    var fn = aFunction(this);
    // 获取第二个参数   就是绑定函数的参数列表，是一个数组
    var partArgs = arraySlice.call(arguments, 1);
    var bound = function (/* args... */) {
        var args = partArgs.concat(arraySlice.call(arguments));
        return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
        // return invoke(fn, args, that);
    };
    // 继承
    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
}


var construct = function (F, len, args) {
    if (!(len in factories)) {
        for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
        // eslint-disable-next-line no-new-func  
        // 使用Function定义构造函数   
        factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    } return factories[len](F, args);
};

function aFunction(it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
}

function invoke(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
        case 0: return un ? fn()
            : fn.call(that);
        case 1: return un ? fn(args[0])
            : fn.call(that, args[0]);
        case 2: return un ? fn(args[0], args[1])
            : fn.call(that, args[0], args[1]);
        case 3: return un ? fn(args[0], args[1], args[2])
            : fn.call(that, args[0], args[1], args[2]);
        case 4: return un ? fn(args[0], args[1], args[2], args[3])
            : fn.call(that, args[0], args[1], args[2], args[3]);
    } return fn.apply(that, args);
}

function isObject(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
}


function A() { console.log(222) }
var B = A.bind(null);
var b = new B();
var a = new A();
console.log(B.prototype === A.prototype);
console.log(B.prototype === b.__proto__);
console.log(A.prototype === a.__proto__)
// b()


