import { Dep } from "./Dep";
import { watchers } from './watcher';

export const observer = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return;
    }
    // 遍历obj的所有key做响应式
    new Observer(obj);
}

class Observer {
    constructor(val) {
        this.val = val;
        if (Array.isArray(this.val)) {
        } else {
            this.walk(val);
        }
    }

    // 对象响应式
    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key]);
        })
    }
}

function defineReactive(obj, key, val) {
    observer(val);
    const dep = new Dep();
    Object.defineProperty(obj, key, {
        get() {
            Dep.target && dep.addDep(Dep.target);
            return val;
        },
        set(newVal) {
            if (newVal !== val) {
                observer(newVal);
                val = newVal;
                watchers.forEach(w => w.update())
                dep.notify();
            }
        }
    })
}
