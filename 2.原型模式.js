/**
 * Chrome 和 Firefox
 * a._proto_指向A.prototype
 * @type {{name: string}}
 */
var obj = {name:'wk'};
var A = function () {

};
A.prototype = obj;
var a = new A();
console.log(Object.getPrototypeOf(a) === A.prototype);
















