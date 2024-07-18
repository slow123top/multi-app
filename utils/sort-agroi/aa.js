function temp(n, arr, q, qArr) {
    const result = [];
    qArr.forEach(item => {
        const start = item[0] - 1;
        const end = item[1];
        const k = item[2];
        const s = arr.slice(start, end);
        const likeK = s.filter(i => i == k);
        result.push(likeK.length);
    });
    return result;
}
var readline = require('readline');
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lines = [];
r1.on('line', function (line) {
    lines.push(line);
    if (lines.length > 3) {
        // const param2 = lines[1].split(' ');
        // const param4 = lines.slice(3);
        // const res = temp(lines[0], param2, lines[2], param4.map(p => p.split(' ')));
        // const result = res.join(' ').replace(/\s+/g, '\n');
        console.log(lines);
    }
    // console.log(line);
});
// readline()

// const readline = readline('readline');
// readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// readline.on('line', function (line) {
    
// })