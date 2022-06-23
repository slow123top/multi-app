function testProxy() {
    const handler = {
        get(target, prop, receiver) {
            console.log(target);
            console.log(prop);
            console.log(receiver);
            console.log(...arguments);
            return Reflect.get(...arguments);
        },
        set() {

        }
    }
    const proxy = new Proxy([2, 3, 4], handler);
    return proxy;
}
const testProxy1 = testProxy();
testProxy1.set(0, 'sadsa')
console.log(testProxy1);