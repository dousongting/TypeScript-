"use strict";
// ts 的数据类型 
// ts支持与js几乎相同的数据类型 ,还提供了几个其他类型方便我们使用
// 布尔值
var isDone = true;
// let isshow: boolean = {}
// 数字
// let num: number = 1;
var num = NaN; // 不是一个数字 但是是number 类型
// 还支持二进制 八进制 十六进制
// let o: number = 0o744
var num1 = Infinity; // number 类型  表示无穷大的一个数值
//字符串
var str = '123';
// let str1: string = true;
// 可以使用es6 模板字符串
var stree = "\u9EC4\u6D66\u533A\u659C\u571F\u8DEF";
var sentence = "\u540D\u5B57:" + str + ",\u5E74\u9F84: " + num;
// 数组
var list = ['1', '2', '8'];
// 方式二: 使用数组泛型 Array<元素类型>
var list1 = [1, 3, 4];
// 元祖 tuple
// 就是一个已知元素的数量类型的数组 类型可以不必相同
var arr;
arr = [1, '22'];
arr[0] = 11;
// 枚举 
// 使用枚举类型 可以为一组数值赋值友好的名字?
// enum Color {
//     pink,
//     skyblue,
//     yellowgreen
// }
var Color;
(function (Color) {
    Color[Color["pink"] = 1] = "pink";
    Color[Color["skyblue"] = 3] = "skyblue";
    Color[Color["yellowgreen"] = 2] = "yellowgreen";
})(Color || (Color = {}));
var color = Color[1];
document.body.style.backgroundColor = color;
// any 任何
// 就是当我们不清楚一个变量的类型时候 可以用any  (用户输入 和第三方代码库)
var notSure = "1";
notSure.toFixed();
// object类型的变量只允许给它赋值任意值,但是却不能在它上面调用任意方法,即便它真的有这样的方法
var prettySure = '1'; // ???
// prettySure.toFixed();
// let prettySure1: object = '1' 
// 当你只知道一部分数据类型时候 any 也是有用的
var notSureList = [1, 2, 'ss', true, {}];
notSureList[0] = [];
notSureList[5] = {};
// 空值 void
// 没有任何类型 通常作为不返回值的函数的返回类型
function noReturn() {
    // return 1
    console.log('void');
}
// 不能使用return 关键字
// 若使用return 关键字 必须定义返回值类型
function returnF() {
    return '122';
}
// 声明一个void 类型的变量 没有什么意义,因为只能给他赋值 null 或 undefined
var v = undefined;
// let vo: void = null; //
// undefined 和 null
// let u: undefined = undefined;
var n = null;
// let n1: number = null
// never 
// 表示那些永远不存在的值的类型
// never类型一般用在不可能返回内容的函数的返回值类型设置
function error(msg) {
    throw new Error(msg);
}
// 推断的返回值为never
function fail() {
    return error('something failed');
}
// 存在一个永远达到不了的终点
function infiniteLoop() {
    while (true) {
    }
}
// object 类型 
var obj = {};
var obj1 = [];
var obj2 = { name: 'zhangsan', age: 11 };
// 类型断言
// 简单的说, 就是可以用来手动指定一个值的类型,
// 类型断言有两种方式,其中一种是 '尖括号'语法
var something = 'this is a string';
var strLength = something.length;
// as 语法
var something1 = 'this is a string';
var strLength1 = something.length;
// 如果你在ts 里面使用jsx  只支持as 语法断言 
