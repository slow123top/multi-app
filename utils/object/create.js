// Object.create用于创建一个没有原型对象的对象  相当于是继承某个原型对象
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        if (typeof o !== 'object') {
            new TypeError(o + 'is not a object')
        }
        var F = function () { };
        F.prototype = o;
        return new F();
    }
}

var aaa = {};
var aa = new Object();
var a = Object.create(Object.prototype);
// 以上两个创建{}是等价的