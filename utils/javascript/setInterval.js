// 使用setTimeout实现setInterval
let timer = null;
function interval(func, delay) {
    let interFunc = function () {
        func.call(null);
        timer = setTimeout(interFunc, delay) // 递归调用
    }
    timer = setTimeout(interFunc, delay) // 触发递归
    return timer;
}

interval(() => {
    console.log('asdas');
}, 3000);