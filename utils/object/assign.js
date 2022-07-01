// Object.assign 用于赋值对象，只能浅拷贝源对象的自身属性且该属性是可枚举的
if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
        value: function (target, src) {
            var srcObj = Object(src);
            if (target === null || !target) {
                new Error(target + 'is a null');
            }
            if (arguments.length < 2) {
                return target;
            }
            // 参数个数大于等于2
            for (var i = 0; i < arguments.length; i++) {
                var currentArg = arguments[i];
                // 使用for in 会把原型对象的属性遍历出来  所以还要用hasOwnProperty判断把原型对象的属性排除掉
                for (var k in currentArg) {
                    if (Object.prototype.hasOwnProperty.call(currentArg, k)) {
                        target[k] = currentArg[k];
                    }
                }
            }
        }
    })
}