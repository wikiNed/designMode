/**
 * this指向问题
 * @type {{getName: (function(): string), name: string}}
 */
var obj = {
    name:'sven',
    getName:function () {
        return this.name;
    }
};
//使用方法而不执行，则为window所有
var getName2= obj.getName;
console.log(getName2());

/**
 * call apply bind
 */
var obj1 = {
    name:'123'
};
var getName = function (a,b,c) {
    return this.name+a+b+c;
};
console.log(getName.apply(obj1,[1,2,3]));
console.log(getName.call(obj1,1,2,3));
var getNameBind = getName.bind(obj1);
console.log(getNameBind(1,2,3));













