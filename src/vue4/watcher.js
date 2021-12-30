import { Dep } from "./Dep";

// 监听器
export const watchers = [];
export class Watcher {
    constructor(vm, key, updateFn) {
        this.vm = vm;
        this.key = key;
        this.updateFn = updateFn;
        watchers.push(this);
        Dep.target = this;
        this.vm[this.key]
        Dep.target = null;
    }

    update() {
        this.updateFn.call(this.vm, this.vm[this.key]);
    }
}