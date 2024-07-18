function getStrNum(str,n){
   
    if(str.length===0){
        return [];
    }

    if(n===1){
        if(str.length===1){
            return [str];
        }
        return [...new Set(str.split(''))];
    }
    return pinjie(getStrNum(str.slice(0,str.length-1),n-1).concat(getStrNum(str.slice(0,str.length-1),n)),str.slice(-1));
}


/**
 * 
 * @param {*} strArr   是已经拼接好的数组
 * @param {*} charStr 
 * @returns 
 */
function pinjie(strArr,charStr){
    const result = [];
    strArr.forEach(element => {
        if(element.slice(-1)!==charStr){
            result.push(element+charStr);
        }
    });
    strArr.forEach(element => {
        if(element.slice(0,1)!==charStr){
            result.push(charStr+element);
        }
    });

    // 最后一遍去重
    return [...new Set(result)];
}


console.log(getStrNum('abc',2));
// console.log(pinjie(['ab','ba'],'c'));
// console.log(getStrNum('aa',1));