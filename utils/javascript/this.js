global.a = 22;
var obj = {
    func: () => { console.log(this.a) },
    a: 33
}
obj.func();