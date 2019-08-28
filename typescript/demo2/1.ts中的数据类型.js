// ts支持与js几乎相同的数据类型,还提供了几个其他类型方便我们使用
// 布尔值
// let isDone: boolean = true;
// let isDone: boolean = [];
// 数字
// let num: number = 1;
var num = NaN;
var num1 = Infinity;
// let num2: number = 0xf00d;
var num2 = 484;
// 字符串
// let str: string = '123';
var str = "ssss";
var user = '小明';
var sentence = "\u540D\u5B57:" + user + ",\u5E74\u9F84: " + num;
// 数组 有两种方式可以定义数组,
// 第一种
// let list1: number[] = [1,2,3];
// let list1: number[] = ['1',2,3];
//第二种
// let list2: Array<number> = [1,2,3,4];
// let list2: Array<number> = [1,'2',3,4];
// 元祖 tuple
// 元祖类型允许表示一个已知元素数量和类型的数组,各元素类型不必相同
var t;
// t = ['1', 11]
// t = [1, 12]
// 枚举
// 使用枚举类型可以为一组数值赋予友好的名字。
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let c: Color = Color.Blue; // 2
// 也可以手动指定成员的数值
// enum Color {
//     Red,
//     Green,
//     Blue = 0
// }
// let c: Color = Color.Blue; // 0
// 可以全部手动赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 0] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue; // 0
var c1 = Color.Red; // 1
var c2 = Color.Green; // 2
alert(c);
alert(c1);
alert(c2);
