/**
 * 提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示
 */
var getActive = function () {
    try{
        return new ActiveXObject();
    }catch (e) {
        return false
    }
};

var getFlash = function () {
    try{

    }catch (e) {
        return false
    }
};

var getForm = function () {
    try{

    }catch (e) {
        return false
    }
};

var iteratorUpLoadObj = function () {
    for (var i = 0, length = arguments.length; i < length; i++) {
        var fn = arguments[i]();
        if( fn !== false ){
            return fn
        }
    }
};

var upLoad = iteratorUpLoadObj(getActive,getFlash,getForm);













