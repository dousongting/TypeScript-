"use strict";
// ts 泛型 Generics
// 可以使用泛型来创建可复用的组件 并且组件可支持多种数据类型，方便让用户根据自己的数据类型来使用组件
// 声明泛型有两种方式
function gen_Func(arg) {
    return arg;
}
// 方式2
var gen_Func1 = function (arg) {
    return arg;
};
// 调用方式也有两种
gen_Func('hello,ts');
// 第二种省略了前面的类型 编辑器会根据我们传入得参数来自动识别
gen_Func1('hello, ts');
// 泛型与any
function any_func(arg) {
    console.log(arg.length);
    return arg;
}
function gen_func(arg) {
    // console.log(arg.length) // error
    return arg;
}
function array_func(arg) {
    // return arg.length;
    console.log(arg.length);
    return arg;
}
function func(arg) {
    return arg;
}
var func1 = func;
func1(2222);
var func2 = function (a, b) {
    return [a, b];
};
func2(1, '1');
