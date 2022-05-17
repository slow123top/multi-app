import "core-js/modules/es6.array.map.js";
var a = [1, 2, 3];
var b = [].concat(a);
b.map(function (item) {
  item + 1;
});
export default {
  b: b
};