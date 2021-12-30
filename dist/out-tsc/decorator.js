function color(value) {
    // this is the decorator factory, it sets up
    // the returned decorator function
    return function (target) {
        // this is the decorator
        // do something with 'target' and 'value'...
        console.log('装饰器');
    };
}
export { color };
