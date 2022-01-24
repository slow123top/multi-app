export class Dep {
    constructor() {
        this.subs = [];
    }
    // 收集依赖
    depend() {
        if (window.target) {
            this.subs.push(window.target);
        }
    }
    // 触发依赖
    notify() {
        this.subs.forEach(function (sub) {
            sub();
        })
    }
}
// export class Dep{

// }