const queue = [];
// 执行栈是否正在执行  当不在执行的时候   异步队列释放任务执行
let running = false;
let index = 0;
function run() {
    if (queue.length && !running) {
        const task = queue.shift();
        console.log(task);
        task.then(val => {
            console.log(val + '任务已经执行完');
            run();
        });
    } else {
        running = false;
    }
}
function addQueue(task) {
    queue.push(task);
    // 执行
    run();
}

function doRun() {
    addQueue(buildTask(index++));
}

doRun();

function buildTask(index) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(index);
        });
    }, 100)
}



