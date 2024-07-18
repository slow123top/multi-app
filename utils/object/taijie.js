function num(n){
    if(n===1){
        return 1;
    }
    if(n === 2){
        return 2;
    }
    return num(n-1)+num(n-2);
}
console.log(num(10));

