/**
 * 对抽象类进行继承为具体类
 */
abstract class Beverage{
    constructor(){

    }
    init(){
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiment();
    }

    protected boilWater(){
        console.log(1);
    }

    protected pourInCup(){
        console.log(3);
    }
    
    abstract brew():void

    abstract addCondiment():void
}

class Coffee extends Beverage{
    constructor(){
        super();
    }
    brew(){
        console.log(2);
    }

    addCondiment(){
        console.log(4);
    }
}
const test = new Coffee();
test.init();















