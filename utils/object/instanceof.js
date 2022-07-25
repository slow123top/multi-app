function isInstanceOf(instance, constructFunc) {
    let proto = Object.getPrototypeOf(instance);
    let consProto = constructFunc.prototype;
    while (proto !== consProto) {
        // 如果原型是null 不在原型链中
        if (!proto) {
            return false;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return true;
}