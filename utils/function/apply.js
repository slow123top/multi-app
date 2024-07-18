Function.prototype.apply = function (thisArg) {
    if (!this) {
        new TypeError('this is not defined');
    }
    // 拿到被调用函数的引用
    var func = Object(this);
    // 绑定当前上下文this
    thisArg.func = func;
    // 获取参数
    const funcArguments = arguments[1];
    return thisArg.func(...funcArguments);
}



Function.prototype.applySelf = function(args){
    if(!this){
        new TypeError('this is not defined');
    }
    // 拿到被调用函数的引用
    args.func = this;
    if(arguments.length>1){
        return args.func(...arguments[1]);
    }
    return args.func();
}