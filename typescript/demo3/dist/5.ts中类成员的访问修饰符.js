"use strict";
// 类成员的访问修饰符
// 指的就是可以在类的成员前通过添加关键字来设置当前成员的访问权限
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
// - public: 公开的，默认   所有人都可以进行访问
// -  private： 私有的， 只能在当前类中进行访问
// -  protected： 受保护的，这能在当前类或者子类中进行访问
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var Car = /** @class */ (function () {
    function Car() {
        this.color = Color[0];
        this.run();
    }
    Car.prototype.run = function () { };
    Car.prototype.loadPeople = function () {
    };
    return Car;
}());
var Byd = /** @class */ (function (_super) {
    __extends(Byd, _super);
    function Byd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Byd.prototype.sayHi = function () {
        // this.run()
        this.loadPeople();
    };
    return Byd;
}(Car));
var bw = new Byd();
bw.color = Color[1];
// bw.loadPeople();
// bw.run();
bw.sayHi();
// console.log(bw.color); // yellow
