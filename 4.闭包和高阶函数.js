/**
 * 私有变量
 */
var mult = (function () {
    var cache = {};
    var calculate = function () {
        var a = 1;
        for (var i = 0, length = arguments.length; i < length; i++) {
            a= a * arguments[i];
        }
        return a
    };

    return function () {
        var args = Array.prototype.join.call(arguments,',');
        if( args in cache ){
            return cache[args];
        }
        return cache[args] = calculate.apply(null,arguments);
    }
})();
// console.log(mult(1, 2, 3));
// console.log(mult(3, 2, 1));

/**
 * uncurrying
 */
Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        var obj = Array.prototype.shift.call(arguments);
        //obj ==> Array ==> obj
        return self.apply(obj,arguments);
    }
};
var push = Array.prototype.push.uncurrying();
var obj = {
    "length":1,
    "0":1
};

/**
 * 节流函数
 * @param fn
 * @param interval
 */
var throttle = function (fn,interval) {
    var self = fn,
        firstTime = true,
        timer = null;

    return function () {
        var _me = this;
        if( firstTime ){
            self.apply(_me,arguments);
            return firstTime = false;
        }
        if( timer ){
            return false
        }
        timer = setTimeout(function () {
            clearTimeout(timer);
            timer = null;
            return self.apply(_me,arguments);
        },interval || 500);
    }
};

/**
 *分时函数
 * @param array
 * @param fn
 * @param count
 */
var timeChunk = function (array,fn,count,interval) {
    var item,
        t;
    var start = function () {
        for (var i = 0; i < Math.min(count || 1,array.length); i++) {
            item = array.shift();
            fn(item)
        }
    };
    return function () {
        t = setInterval(function () {
            if( array.length === 0 ){
                return clearInterval(t);
            }
            start();
        },interval || 200);
    }
};

/**
 * 惰性加载函数
 * @param ele
 * @param type
 * @param handler
 */
var lazyLoad = function (ele,type,handler) {
    if( window.addEventListener ){
        lazyLoad = function (ele,type,handler) {
            ele.addEventListener(type,handler,false)
        }
    }else if( window.attachEvent ){
        lazyLoad = function (ele,type,handler) {
            ele.attachEvent('on'+type,handler)
        }
    }
    lazyLoad(ele,type,handler);
};








