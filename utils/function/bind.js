function bind(context) {
    var func = Object(this);
    return function () {
        // return func.apply(context);
        return func.call(context);
    }
}