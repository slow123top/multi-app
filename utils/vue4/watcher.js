
export class Watcher {
    constructor(vm, key, callback) {
        this.vm = vm;
        // 获取属性值的getter
        this.getter = exOrfn(this.vm, key);
        // 
        this.cb = callback;
        this.value = this.get();
    }

    get() {
        // watcher实例
        window.target = this;
        // 当执行某个属性的getter  就会收集依赖   把window.target给收集过去
        const value = this.getter.call(this.vm, this.vm);
        window.target = null;
        return value;
    }

    // 触发依赖执行
    notify() {
        const oldValue = this.value;
        // 获取属性新值
        this.value = this.get();
        this.cb.call(this.vm, this.value, oldValue);
    }
}

function exOrfn(vm, val) {
    // 
    // if(val){

    // }
    const valArr = val.split('.');
    return valArr;
}


const vm = {};
vm.$watcher = function (key, callback) {
    const watcher = new Watcher(vm, key, callback);
    watcher.notify();
};