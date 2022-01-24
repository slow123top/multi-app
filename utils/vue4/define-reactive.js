import { Dep } from './dep';
export function defineReactive(obj, key, val) {
    let value = val;
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,
        get: function () {
            // 收集依赖
            dep.depend();
            return value;
        },
        set: function (newValue) {
            // 触发依赖
            dep.notify();
            value = newValue;
        }
    })
}