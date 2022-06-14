// 匹配括号

const symbol = {
    '}': '{',
    ']': '[',
    ')': '('
}
function kuohao(str) {
    let stack = [];
    let i = 0;
    while (i < str.length) {
        const item = str[i];
        if (item === '{' || item === '[' || item === '(') {
            stack.push(item);
        }
        if (item === '}' || item === ']' || item === ')') {
            if (!stack.length || stack[stack.length - 1] !== symbol[item]) {
                console.log(stack);
                return false;
            }
            stack.pop();
        }
        i++;
    }
    if (stack.length) {
        return false;
    }
    return true;
}

console.log(kuohao('[({})]'));