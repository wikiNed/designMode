/**
 * 执行指令，支持撤销、排队等
 * 有时候需要向某些对象发送请求，但是并不知道请求的接收者是谁，
 * 也不知道被请求的操作是什么。需要一种松耦合的方式来设计程序，
 * 使得发送者和接收者能够消除彼此之间的耦合关系
 */
interface Receiver{
    execute():void;
}

class Receiver1 implements Receiver{
    execute(){
        console.log('执行');
    }
}


class Command1 implements Receiver{
    public receiver:any;
    constructor(receiver){
        this.receiver = receiver;
    }

    execute(){
        console.log('命令对象');
        this.receiver.execute();
    }
}

interface Invoker{
    invock():void;
}

class Invoker1 implements Invoker{
    public command:any;
    constructor(command){
        this.command = command;
    }
    invock(){
        console.log('发布者');
        this.command.execute();
    }
}

const fire = new Receiver1();
const order = new Command1(fire);
const client = new Invoker1(order);
client.invock();
















