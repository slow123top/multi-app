class HPromise {
    static PENDING = 'Pending';
    static FULFILLED = 'FulFilled';
    static REJETCED = 'Rejected';
    constructor(func) {
        this.promiseState = HPromise.PENDING;
        this.promiseResult = null;
        this.onFulFilledBacks = [];
        this.onRejectedBacks = [];
        try {
            func.call(this, this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            // 当promise报错时  执行then第二个参数抛出错误
            this.reject(error);
        }
    }

    static resolve(value) {
        if (value instanceof HPromise) {
            return value;
        } else if (value instanceof Object && 'then' in value && typeof value.then === 'function') {
            return new HPromise((resolve, reject) => {
                value.then(resolve, reject);
            })
        }
        return new HPromise((resolve => {
            resolve(value);
        }))
    }

    static reject(reason) {
        return new HPromise((resolve, reject) => {
            reject(reason);
        })
    }

    static all(promises) {
        return new HPromise((resolve, reject) => {
            if (!Array.isArray(promises)) {
                return reject(new TypeError('Arguments is not iterable'))
            } else {
                let result = [];
                let count = 0;
                if (promises.length === 0) {
                    return resolve(promises);
                }
                promises.forEach((p, index) => {
                    if (p instanceof HPromise) {
                        HPromise.resolve(p).then(
                            value => {
                                count++;
                                result[index] = value;
                                count === promises.length && resolve(result);
                            },
                            reason => {
                                reject(reason);
                            }
                        )
                    } else {
                        count++;
                        result[index] = p;
                        count === promises && resolve(result);
                    }
                })
            }
        })
    }

    static allSettled(promises) {
        return new HPromise((resolve, reject) => {
            if (Array.isArray(promises)) {
                let result = [];
                let count = 0;
                promises.forEach((p, index) => {
                    if (p instanceof HPromise) {
                        HPromise.resolve(p).then(
                            value => {
                                count++;
                                result[index] = {
                                    status: 'fulfilled',
                                    value
                                };
                                count === promises.length && resolve(result);
                            },
                            reason => {
                                count++;
                                result[index] = {
                                    status: 'rejected',
                                    reason
                                };
                                count === promises.length && resolve(result);
                            }
                        )
                    }
                })
            } else {
                return reject(new TypeError('Argument is not iterable'));
            }
        })
    }

    resolve(val) {
        // Pending转为FulFilled状态
        if (this.promiseState === HPromise.PENDING) {
            // 保证resolve是异步的
            setTimeout(() => {
                this.promiseState = HPromise.FULFILLED;
                this.promiseResult = val;
                this.onFulFilledBacks.forEach(fn => {
                    fn(this.promiseResult);
                });
            })
        }
    }

    reject(reason) {
        if (this.promiseState === HPromise.PENDING) {
            // 保证reject执行是异步的
            setTimeout(() => {
                this.promiseState = HPromise.REJETCED;
                this.promiseResult = reason;
                this.onRejectedBacks.forEach(fn => {
                    fn(this.promiseResult);
                })
            })
        }
    }

    finally(cb) {
        return this.then(cb, cb);
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }

    then(onFulFilled, onRejected) {
        // 首先判断两个参数是不是函数;如果不是函数  或者不传参数  则默认带出去
        onFulFilled = typeof onFulFilled === 'function' ? onFulFilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
        const promise2 = new HPromise((resolve, reject) => {
            if (this.promiseState === HPromise.PENDING) {
                this.onFulFilledBacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            let x = onFulFilled(this.promiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    })
                });
                this.onRejectedBacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            let x = onRejected(this.promiseResult);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e);
                        }
                    })
                });
            }
            if (this.promiseState === HPromise.FULFILLED) {
                // onFulFilled.call(this, this.promiseResult);
                // 异步执行
                queueMicrotask(() => {
                    try {
                        let x = onFulFilled(this.promiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            }
            if (this.promiseState === HPromise.REJETCED) {
                // 异步执行
                queueMicrotask(() => {
                    try {
                        let x = onRejected(this.promiseResult);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }
        })
        return promise2;
    }
}

// 解决then链式调用
function resolvePromise(promise2, x, resolve, reject) {
    // 回调返回值不能是then的返回值   引起循环调用
    if (x === promise2) {
        return reject(new TypeError('循环引用'));
    }

    if (x instanceof HPromise) {
        if (x.promiseState === HPromise.PENDING) {
            x.then(y => {
                resolvePromise(promise2, y, resolve, reject);
            });
        } else if (x.promiseState === HPromise.FULFILLED) {
            resolve(x.promiseResult);
        } else if (x.promiseState === HPromise.REJETCED) {
            reject(x.promiseResult);
        }
    } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            var then = x.then;
        } catch (e) {
            reject(e);
        }

        if (typeof then === 'function') {
            let called = false;
            try {
                then.call(x,
                    y => { if (called) return; called = true; resolvePromise(promise2, y, resolve, reject) },
                    r => {
                        if (called) return; called = true; reject(r)
                    })
            } catch (e) {
                if (called) return;
                called = true;
                reject(e);
            }
        } else {
            resolve(x);
        }
    } else {
        resolve(x);
    }

}

// export default HPromise;

// var promise = new HPromise(f)

var promise = Promise.resolve(222);
var promise1 = new HPromise((resolve, reject) => {
    // setTimeout(() => {
    resolve(22)
    // })
});
promise
    .then(result => {
        console.log('33');
        console.log(result)
    })

console.log(promise);