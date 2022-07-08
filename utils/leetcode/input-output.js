var readline = require('readline');
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
r1.on('line', function (str) {
    input.push(str);
    if (input.length % 2 === 0) {
        const list = input[input.length - 1].split(' ');
        console.log(list);
        let sumA = 0;
        let sumB = 0;
        let min = Infinity;
        for (let i = 0; i < list.length; i++) {
            sumA ^= Number(list[i]);
            sumB += Number(list[i]);
            min = Math.min(min, Number(list[i]));
        }
        if (sumA % 2 !== 0) {
            console.log(-1);
            return;
        }
        console.log(Math.floor(sumB - min));
    }
});

