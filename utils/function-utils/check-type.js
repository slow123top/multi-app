// 返回js常用数据类型
// [object Object]
//  Object   Array Symbol  String Boolean Number Function Bigint  Null Undefined  Argument Date ....
export function dataType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}

// 