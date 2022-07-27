// ·	给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。
// ·	1 <= columnNumber <= 2^31 - 1

// 例如：
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

// 示例：

// 输入：columnNumber = 1
// 输出："A"

// 输入：columnNumber = 28
// 输出："AB"

// 输入：columnNumber = 701
// 输出："ZY"

// 输入：columnNumber = 2147483647
// 输出："FXSHRXW"
function getStr(num) {
    let a = [];
    for (let i = 65; i <= 90; i++) {
        a[i - 64] = String.fromCharCode(i);
    }
    a[0] = 'Z';
    let str = [];
    while (num) {
        const n = Math.floor(num % 26);
        if (n === 0) {
            str.push(a[26]);
        } else {
            str.push(a[n - 1]);
        }
        if (num === 26) {
            // 等于26的时候结束了
            break;
        }
        num = Math.floor(num / 26);
    }
    return str.reverse().join('');
}

console.log(getStr(701));
