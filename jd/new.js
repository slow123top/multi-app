// function newInstance(className){
//     // 新建一个空对象
//     // 原型指向新的类
//     // 获取this指向
//    const obj =  new Object();
//    obj._proto_ = className.prototype;
//   //  绑定this
//    if(arguments.length>1){
//      const restArgs =  Array.from(arguments).slice(1);
//       const result =  className.apply(obj,restArgs);
//       if((typeof result === 'object' && result !=null)||typeof result === 'function'){
//         return result;
//       }
//    }
//    return obj;
   
// }




// function callFunction(obj,params){
//   const args = Array.from(arguments);
// //   获取当前函数
//   const thisFunc = this;
//   obj.func = thisFunc;
//   if(arguments.length>=2){
//     return obj.func(...args(args.slice(1)));
//   }
//   return obj.func();
// }


// function applyFunction(){
//     const args = Array.from(arguments);
//     //   获取当前函数
//       const thisFunc = this;
//       obj.func = thisFunc;
//       if(arguments.length>=2){
//         return obj.func(...(args[1]));
//       }
//       return obj.func();
// }
function add(){
    let sum = 0;
    if(arguments.length){
      // 有参数的时候
      sum += Array.prototype.slice.call(arguments).reduce((total,next)=> total+next,0);
      const resultFunc = function(){
        if(arguments.length){
          sum += Array.prototype.slice.call(arguments).reduce((total,next)=> total+next,0);
          return resultFunc;
        }
        return sum;
      };
      return resultFunc;
    }
    return sum;
}

function keli(){
  let sum=0;
  const resultFunc = function(x){
      sum += x;
      return resultFunc;
  };
  resultFunc.toString = function(){
    return sum;
  }
  return resultFunc;
}

console.log(keli(1)(2)(3)(10).toString());