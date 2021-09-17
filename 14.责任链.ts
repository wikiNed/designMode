/**
 * 各节点可灵活组合的一种模式
 */
 class Chain {
    fn:any;
    nextFn:any;
    constructor(fn) {
        this.fn = fn;
        this.nextFn = null;
    }

    setNext(nextFn) {
        this.nextFn = nextFn;
    }

    run() {
        this.nextFn ? this.fn().then((a) => {
            this.nextFn.run(a)
        }).catch(e => {
            console.log(e);
        }) : this.fn();
    }
}

/**
 * 测试代码
 * @returns {Promise<unknown>}
 */
const applyDevice = function () {
    return new Promise((resolve, reject) => {
        console.log(1);
        resolve();
    });
};
const chainApplyDevice = new Chain(applyDevice);

const selectAddress = function () {
    return new Promise((resolve, reject) => {
        console.log(2);
        resolve('test');
    });
};
const chainSelectAddress = new Chain(selectAddress);

const selectChecker = function () {
    return new Promise((resolve, reject) => {
        console.log(3);
        reject();
    });
};
const chainSelectChecker = new Chain(selectChecker);

// 运用责任链模式实现上边功能
chainApplyDevice.setNext(chainSelectAddress);
chainSelectAddress.setNext(chainSelectChecker);
chainApplyDevice.run();