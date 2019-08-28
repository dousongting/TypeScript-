// ts 泛型 Generics
// 可以使用泛型来创建可复用的组件 并且组件可支持多种数据类型，方便让用户根据自己的数据类型来使用组件

// 声明泛型有两种方式
function gen_Func<T>(arg: T):T{
    return arg;
}

// 方式2
let gen_Func1: <T>(arg: T) => T = function(arg){
    return arg
}

// 调用方式也有两种

gen_Func<string>('hello,ts');

// 第二种省略了前面的类型 编辑器会根据我们传入得参数来自动识别
gen_Func1('hello, ts');



// 泛型与any
function any_func(arg: any): any {
    console.log(arg.length)
    return arg
}

function gen_func<T>(arg: T): T {
    // console.log(arg.length) // error
   return arg; 
}

function array_func<T>(arg: Array<T>): Array<T> {
    // return arg.length;
    console.log(arg.length)
    return arg
}

// 泛型接口
// 接口用interface 声明
interface GenericsInterface<T> {
    (arg: T): T
}

function func<T>(arg: T): T {
    return arg;
}

let func1: GenericsInterface<number> = func;
func1(2222);


interface Ass<T, J> {
    (a: T, b: J): [T, J]
}

let func2:Ass<number, string> = function (a, b){
    return [a, b];
}

func2(1,'1');