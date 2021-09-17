/**
 * 在存在大量相似对象，造成很大的内存开销，大多数状态可变为外部状态，剥离外部状态后，可使用较少共享对象替代的模式
 */
class Model{
    sex:string;
    //外部状态
    constructor(sex){
        this.sex = sex
    }

    //内部状态
    takePhoto(clothes:string){
        console.log(this.sex+'wear'+clothes);
    }
}

let man = new Model('man');
let woman = new Model('woman');
for (let index = 0; index < 50; index++) {
    man.takePhoto('clothes'+index)
}
for (let index = 0; index < 50; index++) {
    woman.takePhoto('clothes'+index)
}













