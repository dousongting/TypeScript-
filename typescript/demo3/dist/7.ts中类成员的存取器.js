"use strict";
// ts 中类成员的存取器
// 
// class UserName {
//     name: string = ''
// }
// let p = new UserName();
// p.name = '1111三打两建萨拉肯德基理科';
// 我们想要做一些校验
var UserName = /** @class */ (function () {
    function UserName() {
        // 通常会这样写
        this._name = '';
    }
    Object.defineProperty(UserName.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            if (val.length < 2 || val.length > 5) {
                throw new Error('名字不合法!');
            }
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    return UserName;
}());
var p = new UserName();
p.name = '三';
