// 匹配括号
function youxiaokuohao(str) {
    if (!str.length) {
        return 0;
    }
    let stack = [];
    let i = 0;
    let count = 0;
    while (i < str.length) {
        const item = str[i];
        if (item === '(') {
            stack.push(item);
        }
        if (item === ')') {
            if (!stack.length && count) {
                // 栈为空 且不连续 跳出循环
                break;
            }
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
                count += 2;
            }
            
        }
        i++;
    }
    return count;
}
console.log(youxiaokuohao("()(()"));