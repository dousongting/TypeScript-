"use strict";
// 使用implements 关键字 继承类类型接口
var XG = /** @class */ (function () {
    function XG() {
        this.name = '小刚';
        this.age = 11;
    }
    XG.prototype.eat = function (food) {
        return food;
    };
    return XG;
}());
var xiaogang = new XG();
xiaogang.eat('西瓜');
