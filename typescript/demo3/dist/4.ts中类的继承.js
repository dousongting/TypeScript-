"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        // 和es6不同的是, ts中属性必须声明 需要指定类型
        this.name = '11';
        this.name = name;
        this.age = age;
    }
    ;
    Person.prototype.sayHello = function (msg) {
        console.log(msg);
    };
    return Person;
}());
var Xh = /** @class */ (function (_super) {
    __extends(Xh, _super);
    function Xh(name, age) {
        return _super.call(this, name, age) || this;
    }
    Xh.prototype.hobby = function (msg) {
        console.log(msg);
    };
    return Xh;
}(Person));
var xiaohong = new Xh('小红', 11);
xiaohong.sayHello('我是小红');
xiaohong.hobby('吃');
var Animal = /** @class */ (function () {
    function Animal(age) {
        this.age = age;
    }
    Animal.prototype.eat = function () {
        console.log("吃个大鸡腿");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(age, type) {
        var _this = _super.call(this, age) || this;
        _this.type = type;
        return _this;
    }
    // 子类中如果出现了和父类同名的方法，则会进行覆盖
    // 也就是调用的时候，调用的就是子类中的方法了！
    Dog.prototype.eat = function () {
        console.log('我是狗对象中的eat');
    };
    return Dog;
}(Animal));
var dog = new Dog(1, '金毛');
dog.eat();
