// ts 的数据类型 
// ts支持与js几乎相同的数据类型 ,还提供了几个其他类型方便我们使用

// 布尔值
let isDone: boolean = true;
// let isshow: boolean = {}

// 数字
// let num: number = 1;
let num: number = NaN; // 不是一个数字 但是是number 类型
// 还支持二进制 八进制 十六进制
// let o: number = 0o744
let num1: number = Infinity; // number 类型  表示无穷大的一个数值


//字符串
let str: string = '123';
// let str1: string = true;
// 可以使用es6 模板字符串
let stree: string = `黄浦区斜土路`;
let sentence: string = `名字:${str},年龄: ${num}`;

// 数组
let list: string[] = ['1','2','8'];
// 方式二: 使用数组泛型 Array<元素类型>
let list1: Array<number> = [1, 3, 4];

// 元祖 tuple
// 就是一个已知元素的数量类型的数组 类型可以不必相同
let arr: [number, string];
arr = [1,'22']
arr[0] = 11;


// 枚举 
// 使用枚举类型 可以为一组数值赋值友好的名字?
// enum Color {
//     pink,
//     skyblue,
//     yellowgreen
// }

enum Color {
    pink = 1,
    skyblue = 3,
    yellowgreen = 2
}

let color :string = Color[1];
document.body.style.backgroundColor = color;

// any 任何
// 就是当我们不清楚一个变量的类型时候 可以用any  (用户输入 和第三方代码库)
let notSure: any = "1";
notSure.toFixed();

// object类型的变量只允许给它赋值任意值,但是却不能在它上面调用任意方法,即便它真的有这样的方法
let prettySure: Object = '1' // ???
// prettySure.toFixed();


// let prettySure1: object = '1' 

// 当你只知道一部分数据类型时候 any 也是有用的
let notSureList: any[] = [1,2,'ss',true, {}];
notSureList[0] = []
notSureList[5] = {};

// 空值 void
// 没有任何类型 通常作为不返回值的函数的返回类型

function noReturn(): void {
    // return 1
    console.log('void');
}
// 不能使用return 关键字

// 若使用return 关键字 必须定义返回值类型
function returnF(): string {
    return '122';
}

// 声明一个void 类型的变量 没有什么意义,因为只能给他赋值 null 或 undefined
let v: void = undefined;
// let vo: void = null; //


// undefined 和 null
// let u: undefined = undefined;
let n: null = null;

// let n1: number = null


// never 
// 表示那些永远不存在的值的类型
// never类型一般用在不可能返回内容的函数的返回值类型设置
function error(msg: string): never {
    throw new Error(msg);
}

// 推断的返回值为never
function fail(): never {
    return error('something failed');
}

// 存在一个永远达到不了的终点
function infiniteLoop(): never {
    while(true) {

    }
}

// object 类型 

let obj: object = {}
let obj1: object = []

let obj2: {name: string, age: number} = {name: 'zhangsan', age: 11}

// 类型断言
// 简单的说, 就是可以用来手动指定一个值的类型,
// 类型断言有两种方式,其中一种是 '尖括号'语法

let something: any = 'this is a string';
let strLength: number = (<string>something).length;

// as 语法
let something1: any = 'this is a string';
let strLength1: number = (something as string).length;
// 如果你在ts 里面使用jsx  只支持as 语法断言 