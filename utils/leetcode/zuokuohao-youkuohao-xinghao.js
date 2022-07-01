function pipei(str) {
    let min = 0;
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        const current = str[i];
        if (current === '(') {
            min++;
            max++;
        } else if (current === ')') {
            min--;
            max--;
            if (max < 0) {
                return false;
            }
        } else {
            min = Math.max(min - 1, 0);
            max++;
        }
    }
    return min === 0;
}

console.log(pipei('*)*'));