const Pending = 'Pending';
const Fulfilled = 'Fulfilled';
const Rejected = 'Rejected';
class LoosePromise {
    constructor(func) {
        if (!(this instanceof LoosePromise)) {
            // 没有使用构造函数  报错
            return;
        }
        if (typeof func !== 'function') {
            // 如果参数不是函数类型  报错
            return;
        }
        this.state = Pending;
        this.result = undefined;

        this.onFulFilleds = [];
        this.onRejecteds = [];
        // 执行参数
        try {
            func((value) => {
                this.resolve(value)
            }, (reason) => {
                this.reject(reason);
            })
        } catch (e) {
            this.reject(e);
        }
    }

    /**
     * 更改状态为成功
     * @param {*} value 
     */
    resolve(value) {
        this.state = Fulfilled;
        this.result = value;
        // 执行成功后的fulfilled函数
        if (this.onFulFilleds.length > 0) {
            this.onFulFilleds.forEach(onFulFilled => onFulFilled(this.result));
        }
    }

    reject(reason) {
        this.state = Rejected;
        this.result = reason;
        if (this.onRejecteds.length > 0) {
            this.onRejecteds.forEach(onRejected => onRejected(this.result));
        }
    }


    static resolve(value) {
        if (value instanceof LoosePromise) {
            return value;
        }
        const promise = new LoosePromise(function (resolve, reject) {
            resolvePromise(promise, value, resolve, reject);
        });
        return promise;
    }

    static reject(reason) {
        return new LoosePromise(function (resolve, reject) {
            reject(reason);
        })
    }

    /**
     * 新建并返回一个新的promise 
     * 当所有的都是fulfilled状态  才会输出fulfilled状态
     * 当有一个rejected状态时  输出这个状态
     */
    static all(values) {
        if (!Array.isArray(values)) {
            return LoosePromise.reject('不是数组')
        }
        let count = 0;
        return new Promise(function (resolve, reject) {
            if (!values.length) {
                resolve([]);
            } else {
                const result = [];
                values.forEach((val, index) => {
                    LoosePromise.resolve(val).then(x => {
                        result[index] = x;
                        count++;
                        if (count === values.length) {
                            resolve(result);
                        }
                    }, y => {
                        reject(y);
                    });
                })
            }
        });
    }

    static race(values) {

    }

    /**
     * 只要是所有的promise是fulfilled或者rejected  
     * @param {*} values 
     * @returns 
     */
    static allSettled(values) {
        if (!Array.isArray(values)) {
            return LoosePromise.reject('不是数组')
        }
        let count = 0;
        return new Promise(function (resolve, reject) {
            if (!values.length) {
                reject([]);
            } else {
                const result = [];
                values.forEach((val, index) => {
                    LoosePromise.resolve(val).then(x => {
                        resolve(x)
                    }, y => {
                        result[index] = y;
                        count++;
                        if (count === values.length) {
                            reject(result);
                        }
                    });
                })
            }
        });
    }

    /**
     * 跟all()相反  新建并返回一个新的promise 只要有一个fulfilled；
     * 当所有都变成rejected 新的promise才会变成rejected
     * @param {*} values 
     * @returns 
     */
    static any(values) {
        if (!Array.isArray(values)) {
            return LoosePromise.reject('不是数组')
        }
        let count = 0;
        return new Promise(function (resolve, reject) {
            if (!values.length) {
                reject([]);
            } else {
                const result = [];
                values.forEach((val, index) => {
                    LoosePromise.resolve(val).then(x => {
                        resolve(x)
                    }, y => {
                        result[index] = y;
                        count++;
                        if (count === values.length) {
                            reject(result);
                        }
                    });
                })
            }
        });
    }
}

LoosePromise.prototype.then = function (onFulFilled, onRejected) {
    // 如果参数不是函数  设置成函数   这也是promise 值穿透的原因
    onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => reason;
    const state = this.state;
    const value = this.value;
    const nextPromise = new LoosePromise(function (resolve, reject) {
        if (state === Fulfilled) {
            // 一定要获取返回值  这里是异步
            setTimeout(() => {
                try {
                    const nextValue = onFulFilled.call(undefined, value);
                    resolvePromise(nextPromise, nextValue, resolve, reject);
                } catch (e) {
                    reject(e)
                }
            }, 0);
        } else if (state === Rejected) {
            setTimeout(() => {
                try {
                    const nextValue = onRejected.call(undefined, value);
                    resolvePromise(nextPromise, nextValue, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            }, 0);
        } else if (state === Pending) {
            // 当上一个promise 的resolve在异步中，状态不会立刻改变，因此要把这些回调函数缓存起来
            this.onFulFilleds.push(() => {
                setTimeout(() => {
                    try {
                        const nextValue = onFulFilled.call(undefined, value);
                        resolvePromise(nextPromise, nextValue, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            });
            this.onRejecteds.push(() => {
                setTimeout(() => {
                    try {
                        const nextValue = onRejected.call(undefined, value);
                        resolvePromise(nextPromise, nextValue, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return nextPromise;
}


LoosePromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}

LoosePromise.prototype.finally = function (callback) {
    let P = this.constructor;	// P 指向当前 promise 实例的构造器，简单说就是 Promise 构造函数
    return this.then(
        value => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
}
/**
 * 根据promiseA+规范
 */
function resolvePromise(promise, returnValue, resolve, reject) {
    if (promise === returnValue) {
        reject('死循环');
    }
    if (isDef(returnValue) && (typeof returnValue === 'object' || typeof returnValue === 'function')) {
        let called = false;
        try {
            const then = returnValue.then;
            if (typeof returnValue === 'function') {
                then.call(returnValue, y => {
                    if (called) {
                        return;
                    }
                    called = true;
                    resolvePromise(promise, y, resolve, reject);
                },
                    reason => {
                        if (called) {
                            return;
                        }
                        called = true;
                        reject(reason);
                    })
            } else {
                resolve(returnValue);
            }
        } catch (e) {
            if (called) {
                return;
            }
            called = true;
            reject(e);
        }
    } else {
        resolve(returnValue);
    }
}

function isDef(value) {
    return value !== null && value !== undefined;
}

function runAsync(x) {
    const p = new LoosePromise(r =>
        setTimeout(() =>
            r(x, console.log(x)),
            1000)
    )
    return p
}

LoosePromise.all([runAsync(1), runAsync(2), runAsync(3)]).then(res => console.log(res))


