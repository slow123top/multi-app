import { dataType } from './check-type.js';
// 判断是否是纯对象
export const isPlainObject = (obj) => {
    const valueType = dataType(obj);
    return valueType === 'Object';
}