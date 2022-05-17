const a =
    `
    const a = [1, 2, 3];
    const b = [...a];
    b.map(item => { item + 1 });
    export default { b }
`
const babel = require('@babel/core');
const b = babel.transformSync(a, {});
console.log(b);