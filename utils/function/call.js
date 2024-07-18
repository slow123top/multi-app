Function.prototype.call = function (thisArg) {
    if (!this) {
        new TypeError('this is not defined');
    }
    // 拿到被调用函数的引用
    var func = Object(this);
    // 绑定当前上下文this
    thisArg.func = func;
    // 获取参数
    var funcArguments
    if (arguments.length > 1) {
        funcArguments = Array.from(arguments).slice(1);
        return thisArg.func(...funcArguments);
    }
    return thisArg.func();
}


Function.prototype.callSelf = function(args){
    const context = arguments[0];
    const params = Array.from(arguments).slice(1);
    context.func = this;
    return context.func(...params);
}