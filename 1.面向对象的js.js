/**
 * 多态：同一操作对不同对象，产生不同结果。将‘做什么’与‘怎么做’解耦
 */
let makeSound = animal => (typeof animal.sound === 'function') && animal.sound();
function Duck() {}
Duck.prototype.sound = ()=> console.log('嘎嘎嘎');
function Chicken() {}
Chicken.prototype.sound = ()=> console.log('咕咕咕');
makeSound(new Duck());
makeSound(new Chicken());

/**
 * 封装：内部信息隐藏，对自己的行为负责，不影响外部
 */
function T1() {
    let _name = 'wk';
    return{
        getName:function () {
            return _name;
        }
    }
}
let nT1 = new T1();
console.log(nT1._name);
console.log(nT1.getName());









