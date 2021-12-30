function Promise(cb) {
    cb.call(this);
}

// 使用
function successCb() {
    console.log('成功回调函数');
}

function failCb() {
    console.log('失败回调函数');
}

var PENDING = 'pending'
var FULFILLED = 'fulFilled'
var REJECTED = 'rejected'

var fulFilledCbs = [];
var rejectedCbs = [];

function Promise(fn) {
    this.status = PENDING;
    this.value = '';
    fn.call(this, resolve, reject);
    var resolve = () => {
        if (this.status !== FULFILLED) {
            this.status = FULFILLED;
            // fn
            // 异步执行函数
            fulFilledCbs.forEach(cb => {
                cb();
            });
        }
    }

    var reject = function () {
        if (this.status !== REJECTED) {
            this.status = REJECTED;
            rejectedCbs.forEach(fn => fn())
        }
    }
}

Promise.prototype.then = function (fulFilledCb, rejectedCb) {
    fulFilledCbs.push(fulFilledCb);
    rejectedCbs.push(rejectedCb);
}

// createAudioFileAsync
// Promise.prototype.