class TestPromise {

    constructor(excutor) {
        this.state = 'pending';
        this.value = null;
        this.fullFilledBacks = [];
        this.rejectedBacks = [];
        const resolve = function (value) {
            if (this.state === 'pending') {
                // 异步执行then里面的回调
                setTimeout(() => {
                    this.state = 'fulfilled';
                    this.value = value;
                    this.fullFilledBacks.forEach(fn => fn(this.value))
                })
            }
            // this.value 
        }
        const reject = function (reason) {
            if (this.state === 'pending') {
                // 异步执行then里面的回调
                setTimeout(() => {
                    this.state = 'rejected';
                    this.value = reason;
                    // 结果作为下一个的传入的参数
                    this.rejectedBacks.forEach(fn => fn(this.value));
                })
            }
        }
        // Promise中的参数excutor
        try {
            excutor(resolve, reject);
        } catch (error) {
            reject(error)
        }
    }

    then(onFulfilledBack, onRejectedBack) {
        // 判断两个参数不是函数的情况
        if (typeof onFulfilledBack !== 'function') {
            onFulfilledBack = value => value;
        }
        if (typeof onRejectedBack !== 'function') {
            onRejectedBack = reason => reason;
        }
        const promise2 = new TestPromise((resolve, reject) => {
            if (this.state === 'fullfilled') {
                try {
                    const x = onFulfilledBack(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e)
                }
            } else if (this.state === 'rejected') {
                try {
                    const x = onRejectedBack(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            } else if (this.state === 'pending') {
                // 缓存函数
                this.fullFilledBacks.push(() => {
                    try {
                        const x = onFulfilledBack(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                });
                this.rejectedBacks.push(() => {
                    try {
                        const x = onRejectedBack(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
        });
        return promise2;
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        reject(new TypeError(x + ' and ' + promise + 'is a same object'));
    }
    if (x instanceof TestPromise) {
        if (x.state === 'pending') {
            x.then(
                y => resolvePromise(promise, y, resolve, reject),
            );
        } else if (x.state === 'fulfilled') {
            resolve(x.value);
        } else if (x.state === 'rejected') {
            reject(x.value)
        }
    } else if (isObject(x)) {
        // thenable 类型的
        try {
            var then = x.then;
        } catch (e) {
            reject(e);
        }

        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(x,
                    y => resolvePromise(promise, y, resolve, reject),
                    r => reject(r));
            } catch (e) {
                reject(e)
            }
        } else {
            resolve(x)
        }
    } else {
        // x是一个普通值
        resolve(x)
    }
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}