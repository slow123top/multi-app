class ChainablePromiseLogger {
     promise = Promise.resolve();

    console(value){
        this.promise = this.promise.then(() => {
            console.log(value);
            return Promise.resolve();
        });
        return this;
    }

    setTimeout(ms) {
        this.promise = this.promise.then(() => {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
        return this;
    }
}

// 使用示例
const logger = new ChainablePromiseLogger();
logger
    .console(1) // 输出1
    .setTimeout(3000) // 等待3秒
    .console(33) // 输出33
    .setTimeout(5000) // 等待5秒
    .console(11); // 输出11