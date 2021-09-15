/**
 * 定义一系列算法，且把它们各自封装，并且是它们可以互相替换
 */
var stages = {
    'S':function (salary) {
        return salary*4;
    },
    'A':function (salary) {
        return salary*3;
    }
};
var calculateBonus = function (level,salary) {
  return stages[level](salary);
};
console.log(calculateBonus('S', 20000));














