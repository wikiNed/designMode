/**
 * 对抽象类进行继承为具体类
 */
abstract class Beverage{
    init(){
        this.boilWater();
        this.pourInCup();
    }

    boilWater = () => {

    };

    pourInCup = () => {

    };
}

class Coffee extends Beverage{
    boilWater=()=>{
        console.log(1);
    }

    pourInCup=()=>{
        console.log(2);
    }
}
















