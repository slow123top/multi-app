Object.prototype[Symbol.iterator] = function () {
    const obj = this;
    const keys = Object.keys(obj);
    let index = 0;
    return {
        next: function () {
            return {
                done: index === keys.length,
                value: obj[keys[index++]]
            }
        }
    }
}


Object.prototype[Symbol.iterator] = function* () {
    const obj = this;
    const keys = Object.keys(obj);
    let index = 0;
    while (index < keys.length) {
        yield obj[keys[index]];
        index++;
    }
}

const data = { name: '名称', value: '值', title: '标题' };
for (let item of data) {
    console.log(item);
}