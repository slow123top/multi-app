class EventBus {
    static obj;
    subs;
    id = 0;
    constructor() {
        this.subs = {};
        this.id = 0;
        this.tag = false;
    }
    // 发布
    emit(name, ...params) {
        if (this.subs[name]) {
            const cb = this.subs[name];
            for (let callbackId in cb) {
                cb[callbackId](params);
            }
        }
    }
    // once(name, ...params) {
    //     if (this.tag) {
    //         return;
    //     }
    //     this.emit(name, ...params);
    //     this.tag = true;
    // }
    // 订阅
    on(name, callback) {
        // 第二个参数必须是函数
        if (typeof callback !== 'function') {
            return;
        }
        // id+1
        this.id++;
        if (!this.subs[name]) {
            // 如果该事件不存在  先注册事件列表
            this.subs[name] = {};
        }
        this.subs[name][this.id] = callback;
    }

    off(name) {
        const args = [].slice.call(arguments);
        if (!args.length) {
            // 把所有的事件都注销
            this.subs = {};
            return;
        }
        const eventList = this.subs[name];
        if (args.length === 1) {
            // 不传id  直接把所有事件注销
            for (let callbackId in eventList) {
                delete eventList[callbackId];
            }
            delete this.subs[name];
            return;
        }
        // 传多个id
        const rest = args.slice(1);
        if (Array.isArray(rest)) {
            rest.forEach(r => {
                delete eventList[r];
            });
        } else {
            // 传一个id
            delete eventList[rest];
        }
        if (!Object.keys(eventList).length) {
            delete this.subs[name];
        }
    }
}

let bus = new EventBus();
bus.on('aa', () => {
    console.log('asdasdas');
})

bus.on('aa', (a, b) => {
    console.log('！Q！！asdasdas', a, b);
})

// bus.off('aa');

bus.emit('aa', 222, 3444);