if (!Object.entries) {
    Object.entries = function (obj) {
        if (obj === null || obj === undefined) {
            new TypeError('Cannot convert undefined or null to object');
        }
        var keys = obj.keys(obj);
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            let result = [];
            for (var i = 0; i < keys.length; i++) {
                result[i] = [keys[i], obj[keys[i]]];
            }
        }
    }
}