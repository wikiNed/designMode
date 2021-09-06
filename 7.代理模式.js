/**
 * 为一个对象提供一个代用品或占位符，以便控制对它的访问
 * 类型：保护代理 虚拟代理 缓存代理
 */

//虚拟代理 图片加载
var myImage = function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);

    return {
        setSrc: function (src) {
            imgNode.src = src;
        }
    }
};

var proxyImage = function () {
    var img = new Image;
    //相当于addEventListener
    img.onload = function () {
        myImage.setSrc(this.src)
    };

    return {
        setSrc: function (src) {
            myImage.setSrc('http://dsajda.com/loading.gif');
            img.src = src;
        }
    }
};

//缓存代理
var mult = function () {
    var a = 1;
    for (var i = 0; i < arguments.length; i++) {
        a *= arguments[i];
    }
    return a
};

var proxyMult = (function () {
    var cache = {};
    return function () {
        var args = Array.prototype.join.call(arguments,',');
        if( args in cache ){
            return cache[args];
        }
        return cache[args] = mult.apply(this,arguments)
    }
})();
console.time(1);
console.log(proxyMult(1, 2, 3, 4));
console.timeEnd(1);
console.time(2);
console.log(proxyMult(1, 2, 3, 4));
console.timeEnd(2);










