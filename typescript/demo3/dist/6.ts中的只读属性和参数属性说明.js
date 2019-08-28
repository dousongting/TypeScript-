"use strict";
// 只读属性 readonly
var Cat = /** @class */ (function () {
    // type: string;
    function Cat(type) {
        this.type = type;
        this.name = '加菲';
        // this.type = type
    }
    return Cat;
}());
var cat = new Cat('橘猫');
// cat.name = '小李子';
cat.type = '时间实际上';
