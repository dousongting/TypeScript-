"use strict";
// ts中接口的继承 
// 接口继承接口
var superPoint = {
    x: 1,
    y: 2,
    z: 4,
    time: new Date()
};
// 接口继承类
var Bird = /** @class */ (function () {
    function Bird() {
        this.type = '黄鹂';
    }
    Bird.prototype.eat = function () {
    };
    return Bird;
}());
var flyBird = {
    type: '啄木鸟',
    eat: function () {
    },
    fly: function () {
    }
};
