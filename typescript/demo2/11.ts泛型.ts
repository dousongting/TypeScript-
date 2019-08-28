// ts 的泛型
// 泛型是用来创建可复用的组件, 并且组件可支持多种数据类型
// 方便开发根据自己的数据类型来使用组件

// 1. 泛型方法
// 在ts中 声明泛型有两种方式

function gen_func1<T>(arg: T): T {
    return arg;
}
// 或者
let gen_func2: <T>(arg: T) => T = arg => arg

gen_func1<number>(2);

// 方式2:省略类型参数, 因为编译器会根据传入参数来自动识别对应的类型
gen_func2(1)