const promiseState = {
    unResolved: 'pending',
    fulfilled: 'fulfilled',
    rejected: 'rejected'

}
class TPromise {
    __promiseState = promiseState.unFulfilled;
    __promiseResult = undefined;
    // 当参数是一个异步的时候  需要用到
    __fulfilledCallbacks = [];
    __rejectedCallbacks = [];
    constructor(func) {
        if (typeof func !== 'function') {
            throw TypeError('参数应该是函数');
        }
        if (!(this instanceof TPromise)) {
            throw new Error('TPromise应该作为构造函数调用');
        }
        this.__fulfilledCallbacks = [];
        this.__rejectedCallbacks = [];
        // 注意使用try catch捕捉错误，使用onRejected捕捉错误也是为了链式调用
        try {
            func.call(this, this.onFulfilled.bind(this), this.onRejected.bind(this));
        } catch (e) {
            this.onRejected(e);
        }
    }

    onFulfilled(value) {
        // 更改为成功状态  注意首先判断状态
        if (this.__promiseState === promiseState.unResolved) {
            this.__promiseState = promiseState.fulfilled;
            this.__promiseResult = value;
            if (this.__fulfilledCallbacks.length) {
                this.__fulfilledCallbacks.forEach(cb => cb(this.__promiseResult))
            }
        }
        // 执行函数
    }

    onRejected(e) {
        // 更改为失败状态
        if (this.__promiseState === promiseState.unResolved) {
            this.__promiseState = promiseState.rejected;
            this.__promiseResult = e;
            if (this.__rejectedCallbacks.length) {
                this.__rejectedCallbacks.forEach(cb => cb(e));
            }
        }
    }

    catch(e) {
        return this.then(undefined, e);
    }

    finally(e) {
        return this.then(e, e);
    }

    /**
     * then方法  两个函数作为参数   返回一个TPromise实例
     * @param {*} onFulfilled 
     * @param {*} onRejected 
     * @returns 
     */
    then(onFulfilled, onRejected) {
        const selfPromise = new TPromise(function () {
        });
        // 根据上一个promise 决定下面的执行
        this.excuteFunc(selfPromise, onFulfilled, onRejected);
        return selfPromise;
    }

    excuteFunc(selfPromise, fulfilledCb, rejectedCb) {
        let realFulfilledCb = fulfilledCb;
        let realRejectedCb = rejectedCb;
        // 如果参数不是函数  需要转换成函数
        if (typeof realFulfilledCb !== 'function') {
            // 
            realFulfilledCb = () => realFulfilledCb;
        }
        if (typeof realRejectedCb !== 'function') {
            realRejectedCb = () => realRejectedCb;
        }
        const lastResult = this.__promiseResult;
        const lastState = this.__promiseState;
        if (lastState === promiseState.fulfilled) {
            // If onFulfilled is a function:
            // it must be called after promise is fulfilled, with promise’s value as its first argument.
            // it must not be called before promise is fulfilled.
            // it must not be called more than once.
            setTimeout(() => {
                try {
                    const x = realFulfilledCb.call(this, lastResult);
                    this.resolvePromsie(selfPromise, x);
                } catch (e) {
                    this.onRejected(e);
                }
            });
        } else if (lastState === promiseState.rejected) {
            // If onRejected is a function,
            // it must be called after promise is rejected, with promise’s reason as its first argument.
            // it must not be called before promise is rejected.
            // it must not be called more than once.
            setTimeout(() => {
                try {
                    const x = realRejectedCb.call(this, lastResult);
                    this.resolvePromsie(selfPromise, x);
                } catch (e) {
                    this.onRejected(e);
                }
            });
        } else {
            // 等待状态  也就是说上一个promise中参数是一个异步函数  此时需要收集回调
            this.__fulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        const x = realFulfilledCb.call(this, lastResult);
                        this.resolvePromsie(selfPromise, x);
                    } catch (e) {
                        this.onRejected(e);
                    }
                });
            });
            this.__rejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        const x = realRejectedCb.call(this, lastResult);
                        this.resolvePromsie(selfPromise, x);
                    } catch (e) {
                        this.onRejected(e);
                    }
                });
            });
        }
    }

    /**
     * 按照PromiseA+规范
     * @param {*} promise 
     * @param {*} x 
     */
    resolvePromsie(promise, x) {
        if (promise === x) {
            promise.onRejected(TypeError('循环引用'));
        }
        if (x instanceof TPromise) {
            if (x.__promiseState === promiseState.unResolved) {
                x.then(y1 => {
                    this.resolvePromsie(promise, y1)
                })
            } else if (x.__promiseState === promiseState.fulfilled) {
                x.onFulfilled(x.__promiseResult);
            } else if (x.__promiseState === promiseState.rejected) {
                x.onRejected(x.__promiseResult);
            }
        } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
            let then;
            try {
                then = x.then;
            } catch (e) {
                promise.onRejected(e);
            }

            // If then is a function, call it with x as this, first argument resolvePromise, and second argument rejectPromise, where:
            //If/when resolvePromise is called with a value y, run [[Resolve]](promise, y).
            //If/when rejectPromise is called with a reason r, reject promise with r.
            //If both resolvePromise and rejectPromise are called, or multiple calls to the same argument are made,
            // the first call takes precedence, and any further calls are ignored.
            //If calling then throws an exception e,
            //If resolvePromise or rejectPromise have been called, ignore it.
            //Otherwise, reject promise with e as the reason
            if (typeof then === 'function') {
                let called = false;
                try {

                    if (!called) {
                        then.call(x,
                            y => {
                                if (called) {
                                    return;
                                }
                                called = true;
                                this.resolvePromsie(promise, y)
                            },
                            r => {
                                if (called) {
                                    return;
                                }
                                called = true;
                                promise.onRejected(r)
                            });
                    }
                } catch (e) {
                    if (called) {
                        return;
                    }
                    called = true;
                    promise.onRejected(e);
                }
            } else {
                //If then is not a function, fulfill promise with x.
                promise.onFulfilled(x);
            }

        } else {
            //If x is not an object or function, fulfill promise with x
            promise.onFulfilled(x);
        }
    }

    static resolve(value) {
        if (value instanceof TPromise) {
            return value;
        }
        if (typeof value === 'object' && typeof value.then === 'function') {
            return new TPromise(function (resolve, reject) {
                value.then(resolve, reject);
            })
        }
        const promise = new TPromise(function (resolve, reject) {
            resolve(value);
        });
        return promise;
    }

    static reject(reason) {
        return new TPromise(function (resolve, reject) {
            reject(reason);
        })
    }

    static all(promiseList) {
        return new TPromise(function (resolve, reject) {
            if (!Array.isArray(promiseList)) {
                reject(promiseList + 'is not iterator')
            }
            if (promiseList.length === 0) {
                resolve([]);
            } else {
                const final = [];
                let count = 0;
                for (let i = 0; i < promiseList.length; i++) {
                    const currentPromise = promiseList[i];
                    if (currentPromise instanceof TPromise) {
                        TPromise.resolve(currentPromise).then(val => {
                            count++;
                            final[i] = val;
                            if (count === promiseList.length) {
                                resolve(final);
                            }
                        }, reason => {
                            reject(reason);
                        })
                    } else {
                        count++;
                        final[i] = currentPromise;
                        if (count === promiseList.length) {
                            resolve(final);
                        }
                    }
                }
            }
        });
    }

    /**
     * 只要有一个成功  就返回  和all相反
     * @param {*} promiseList 
     * @returns 
     */
    static any(promiseList) {
        return new TPromise(function (resolve, reject) {
            if (!Array.isArray(promiseList)) {
                reject(promiseList + 'is not iterator')
            }
            let count = 0;
            const result = [];
            for (let i = 0; i < promiseList.length; i++) {
                const currentPromise = promiseList[i];
                if (currentPromise instanceof TPromise) {
                    TPromise.resolve(currentPromise).then(val => {
                        resolve(val);
                    }, reason => {
                        count++;
                        result.push(reason);
                        if (count === promiseList.length) {
                            reject(result);
                        }
                    })
                }
            }
            reject();
        });
    }

    /**
     * 看看谁先改状态
     * @param {*} promiseList 
     * @returns 
     */
    static race(promiseList) {
        return new TPromise(function (resolve, reject) {
            if (!Array.isArray(promiseList)) {
                reject(promiseList + 'is not iterator')
            }
            for (let i = 0; i < promiseList.length; i++) {
                const currentPromise = promiseList[i];
                if (currentPromise instanceof TPromise) {
                    TPromise.resolve(currentPromise).then(val => {
                        resolve(val);
                    }, reason => {
                        reject(reason);
                    })
                }
            }
        });
    }

    /**
     * 返回一个带有所有更改状态结果的promise
     * @param {*} promiseList 
     * @returns 
     */
    static allSettled(promiseList) {
        return new TPromise(function (resolve, reject) {
            if (!Array.isArray(promiseList)) {
                reject(promiseList + 'is not iterator')
            }
            if (promiseList.length === 0) {
                resolve([]);
            } else {
                const final = [];
                let count = 0;
                for (let i = 0; i < promiseList.length; i++) {
                    const currentPromise = promiseList[i];
                    if (currentPromise instanceof TPromise) {
                        TPromise.resolve(currentPromise).then(val => {
                            count++;
                            final[i] = val;
                            if (count === promiseList.length) {
                                resolve(final);
                            }
                        }, reason => {
                            count++;
                            final[i] = reason;
                            if (count === promiseList.length) {
                                resolve(final);
                            }
                        })
                    }
                }
            }
        });
    }
}

