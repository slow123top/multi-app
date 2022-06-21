// function(n: number, arr: Array<number>, q: number, qArr: Array<Array<number>>) {
//     const result = [];
//     qArr.forEach((item: Array<number>, index: number) => {
//         const start = item[0] - 1;
//         const end = item[1];
//         const k = item[2];
//         const s = arr.slice(start, end);
//         const likeK = s.filter(i => i === k);
//         result.push(likeK.length);
//     });
//     return result;
// }
var readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

r1.on('line', function (line) {
    var data = line;
    console.log(data);
});