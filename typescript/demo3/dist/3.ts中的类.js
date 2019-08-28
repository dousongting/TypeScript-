"use strict";
var People = /** @class */ (function () {
    function People(name, age) {
        // 和es6不同的是, ts中属性必须声明 需要指定类型
        this.name = '11';
        this.name = name;
        this.age = age;
    }
    ;
    People.prototype.sayHello = function (msg) {
        console.log(msg);
    };
    return People;
}());
var X = new People('小明', 11);
X.age = 11;
X.sayHello('猴赛雷');
