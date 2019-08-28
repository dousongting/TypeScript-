// 声明泛型的两种方式
function gen_func1<T>(arg: T): T {
    return arg;
}
gen_func1<string>('Hello world');
// gen_func1('Hello world'); // 这里省略也不报错 
// 或者
let gen_func2: <T>(arg: T) => T = function (arg) {
    return arg;
}
gen_func2("hello world"); // 这种方式可以省略类型参数, 因为编译器会根据传入参数来自动识别对应的类型.

// 泛型与any 

// 方法1:带有any参数的方法
function any_func(arg: any): any {
    console.log(arg.length);
    return arg;
}


// 方法2: 有可能传入number 类型的参数 number没有length;
// function loggingIdentity<T>(arg: T): T {
//     console.log(arg.length);  // Error: T doesn't have .length
//     return arg;
// }

// 方法3: Array泛型方法
function array_func<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}


// 泛型类型

// 泛型接口
// 接口用interface声明
interface Generics_interface<T> {
    (arg: T): T;
}

function func_demo<T>(arg: T): T {
    return arg;
}

let func1: Generics_interface<number> = func_demo;
// func1('1111'); // error
func1(1111); // 正确类型的实际参数


// 
interface Ass<T, J> {
    (a: T, b: J): [T, J]
}

let func:Ass<number, string> = function (a, b){
    return [a, b];
}

func(1,'1');
// func('11',1); // error
// func({},[]); // error
// func(123,[11]); // error
// func();

// 通用类型

