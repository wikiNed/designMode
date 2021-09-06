/**
 * 观察者模式，定义了对象间一对多的关系，发布时（状态改变时），订阅者都将得到通知。
 */
class Event{
    constructor() {
        this.clientList = {};

    }
    
    listen(key,fn) {
        if( !this.clientList[key] ){
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn)
    };
    
    trigger() {
        let key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];
        if( !fns || fns.length === 0 ){
            return false
        }
        for (let i = 0,fn; fn=fns[i++];) {
            fn.apply(this,arguments)
        }
    };

    remove(key,fn) {
        let fns = this.clientList[key];
        if( !fns || fns.length < 1 ){
            return false;
        }else{
            for (let i = 0; i < fns.length; i++) {
                let _fn = fns[i];
                if( _fn === fn ){
                    fns.splice(i,1)
                }
            }
        }

    }
}
let event1 = new Event();
event1.listen('88',function (price) {
    console.log(price);
});
event1.trigger('88',200000);














