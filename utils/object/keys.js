if (!Object.keys) {
    Object.keys = function (obj) {
        let result = [];
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            for (var k in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, k)) {
                    result.push(k)
                }
            }
            return result;
        }
        // 首先判断对象中的属性是否存在于实例中而不仅是prototype中，如果是  添加到结果集中;
        // 有的地方还添加了兼容就浏览器的bug。判断构造函数中的方法，如果这些方法没有被枚举出来（for in仅仅列举可枚举的属性），应该单独做判断。
        var hasDontEnumBug = !Object.prototype.propertyIsEnumerable.call({ toString: null }, 'toString'),
        var dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor'
        ],
        var dontEnumsLength = dontEnums.length;
        if (hasDontEnumBug) {
            for (var i = 0; i < dontEnumsLength; i++) {
                if (Object.prototype.hasOwnProperty.call(obj, dontEnums[i])) {
                    result.push(dontEnums[i])
                }
            }
        }
    }
}