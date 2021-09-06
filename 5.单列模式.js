/**
 * 保证一个类仅有一个实例，并提供一个访问它的全局访问点
 */
var getSingle = function (fn) {
  var result;
  return  result || (result = fn.apply(this,arguments));
};

//es6 model
class Animal {
    constructor(name) {
        this.name = name;
    }

    //所有该类的获取name方法仅调用此方法
    getName(){
        return this.name;
    }
}














