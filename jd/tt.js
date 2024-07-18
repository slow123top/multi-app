function red(){
    console.log('red');
}

function green(){
    console.log('green');
}

function yellow(){
    console.log('yellow');
}

const openLight = (timer)=>{
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve();
        },timer)
    });
}

const aa = openLight(3000);
const bb = function(){
   return aa.then(function(val){
        red();
        return openLight(2000);
    }).then(function(val){
        green();
        return openLight(1000);
    }).then(function(val){
        yellow();
        setTimeout(function(){
            return bb();
        },3000);
    })
}

bb();


