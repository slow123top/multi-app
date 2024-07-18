// 动态导入脚本
// import('./external-file.js')
//     .then(module => {
//         const { default: aa } = module;
//         console.log(aa('asdasdas'));
//     })
//     .catch(err => {
//         console.log(err);
//     });

// const importFile = async () => {
//     const { default: myDefault } = await import('./external-file.js');
//     return myDefault();
// }

// importFile().then(e => {
//     console.log(e);
// })

const info =require('./external-file.js');
console.log(info('dasdas'));