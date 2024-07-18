const readline = require('readline');
const rd = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const lines = [];
rd.on('line',function(line){
    lines.push(line);
    if(lines.length>=2){
        // 输出排列顺序
       const biaozhun = lines[0].split(' ')[0];
       const heightList = lines[1].split(' ');
       console.log(getSortd(biaozhun,heightList));
    }
});

const getSortd = function(biaozhun,heightList){
    const offsetHeightList = heightList.map((item)=>{
        return {
            abs:Math.abs(item-biaozhun),
            height:item
        }
    });
    offsetHeightList.sort((a,b)=>{
        if(a.abs === b.abs){
            return a.height-b.height;
        }
        return a.abs-b.abs;
    })
    return offsetHeightList.map(item=>item.height);
}

//console.log(getSortd(100,[95,96,97,98,99,101,102,103,104,105]));
