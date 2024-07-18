const { stdin, stdout } = require('process');
const readline = require('readline');
const rd = readline.createInterface({
    input:stdin,
    output:stdout
});
const lines = [];
rd.on('line',function(line){
    lines.push(line);
    if(lines.length>=2){
        console.log(getLastIndex1(lines[0],lines[1]));
    }
});

const getLastIndex = function(childStr,str){
   const childStrArr =  childStr.split('');
//    存储前一个字符的位置
   let index =-1;
   let tempStr = '';
   for(let i=0;i<childStrArr.length;i++){
        let realIndex = str.indexOf(childStrArr[i]);
        if( realIndex<0){
            break;
        }
        index = realIndex;
        tempStr += str[realIndex];
   }
   if(tempStr.indexOf(childStr)!==-1){
    return index;
   }
   return -1;

}

// 模拟双指针的方式
const getLastIndex1 = function(childStr,str){
    let i = 0;
    let j = 0;
    while(i< childStr.length && j< str.length){
        if(childStr.charAt(i) === str.charAt(j)){
            i++;
        }
        j++;
    }
    if(i === childStr.length){
        return j-1;
    }
    return -1;
 }