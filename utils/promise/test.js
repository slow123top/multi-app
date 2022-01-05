class TestPromise {

    constructor(excutor) {
        this.state = 'pending';
        this.value = null;
        this.fullFilledBacks = [];
        this.rejectedBacks = [];
        const resolve = function (value) {
            if (this.state === 'pending') {
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
        if (this.state === 'fullfilled') {
            onFulfilledBack();
        } else if (this.state === 'rejected') {
            onRejectedBack();
        } else if (this.state === 'pending') {
            // 缓存函数
            this.fullFilledBacks.push(onFulfilledBack);
            this.rejectedBacks.push(onRejectedBack);
        }
    }
}