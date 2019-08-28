//1. 布尔值
let boo: boolean = false;
// let boo1: boolean = {}; // 报错
// let boo2: boolean = []

// 2. 数字
let num: number = 1;
let num1: number = NaN; // 代表不是一个数字 但是类型是number
let num2: number = Infinity;
let num3: number = 0Xf00d; // 十六进制
let num4: number = 0b1010; // 二进制
let num5: number = 0o744; // 八进制

// 3.字符串
let a: string = '122';
// let b: string = 1;
// let c: string = {};
// let d: string = true;
// 还可以使用es6 模板字符串 ``
let g: string = `黑胡椒慷慨激昂李`;
let h: string = `黑胡椒慷慨激昂李 ${num}`;

// 4. 数组
let list: string[] = ['1','2','3'];
// 第二种方式是使用数组泛型 Array<元素类型>
let list1: Array<number> = [1,3,3,4];

// 5. 元祖 tuple
let x: [string, number];
x = ['123', 12];
// x = [123,1]
// console.log(x[0].substr(1));
x[0] = 'sss';
// x[3] = '123';



// 6. 枚举enum 
enum Color {
    red,
    blue,
    yellow
}
let colo: Color = Color.blue; // 1
// 默认情况下是从0 开始编号的 也可以手动指定成员的数值
enum Friut {
    apple = 1,
    orange,
    pear = 2
}
// let f: string = Friut[2];
// document.body.innerHTML = f // pear
alert(colo) // pear

// 7. any
let notSure: any = 'maybe a string instead';
let notSure1: any = false;
let notSure2: any = 123;

// notSure.myName;
// notSure.myName.firstName;



// 对现有代码进行改写的时候,any类型是十分有用的 ,
// object类型的变量只允许给它赋值任意值,但是却不能在它上面调用任意方法,即便它真的有这些方法

let notSure3: any = 4;
notSure3.toFixed();

let prettySure: Object = 4;
// prettySure.toFixed(); // error 
// prettySure.toString();

// 当你只知道一部分数据的类型时候,any类型也是很有用的,
let someList: any[] = [1, 'sss', false];
someList[1] = 100;
someList[2] = true;


// 8.void 
// 某种程度上来说, void类型像是与any类型相反,它表示没有任何类型,当一个函数没有返回值时,你通常会见到其返回值类型是 void

function warnUser(): void {
    console.log('this is my waring message');
    // return 'aaa'; 
}
// 注意 void 不能return;
function aaa(): string {
    console.log('this is my waring message');
    return 'aaa';  // 若没有返回值则会报错
}

// 声明一个void 类型的变量没有什么大用, 因为你只能为它赋予undefined
let unusable: void = undefined;
// let unusable1: void = null; //这里不能赋值null ; 可能做了修改

// 9.null 和 undefined
// 和void 相似,它们本身的类型用处不是很大
let u: undefined = undefined;
let n: null = null;
// 默认情况下 null和undefined 是所有类型的子类型 ,就是说你可以把null 和undefined 赋值给number类型的变量
// let one: number = null;   // strict: true 
// 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
//  这能避免 很多常见的问题。 也许在某处你想传入一个 string或null或undefined，
//  你可以使用联合类型string | null | undefined。 再次说明，稍后我们会介绍联合类型。
// 注意：我们鼓励尽可能地使用--strictNullChecks，但在本手册里我们假设这个标记是关闭的。

// 10. never 
// never类型表示的是那些永不存在的值的类型. 例如那些总会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型,
// never类型是任何类型的子类型,也可以赋值给任何类型. 但是 没有类型是never的子类型或可以赋值给never类型(除了never本身之外) 
// 即使 any 也不可以赋值给never;

// 返回never的函数必须存在无法到达的终点
function error(message: string): never {
    throw new Error(message);
}
// 推断的返回值类型为never 
function fail(): never {
    return error('Something failed');
}

// 返回never的函数必须存在无法到达的终点
function infiniteLoop(): never { // infiniteLoop: 无限循环
    while (true) {

    }
}


//11. object 表示非原始类型, 也就是除了number, string, boolean, symbol, null 或者undefined之外的类型.
// 使用object类型, 就可以更好的表示像 object.create 这样的API 

declare function create(o: object | null): void;

create({name: '小米'});
create(null);

// create(22); // error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// 12. 类型断言
// 有时候你会遇到这样的情况, 你会比ts更了解某个值的详细信息, 通常这回发生在你清楚的知道一个实体具有比它现有类型更确切的类型.

// 通过类型断言这种方式可以告诉编译器, '相信我,我知道自己在干什么'. 类型断言好比其他语言里的类型转换,但是不进行特殊的数据检查和结构,它没有运行时的影响,只是在编译阶段起作用. 
// ts 会假设你,已经进行了必须的检查

// 类型断言有两种形式. 其中一种是 '尖括号'语法
// let someValue: any = 'this is a string';
let someValue: any = 104445;

let len0: number = someValue.length; // 这样写不报错 但是为什么要写类型断言呢
let len: number = (<string>someValue).length;

// 另一个写法为 as语法

let someValue1: any = 'this is a string';
// let someValue: any = 10;

let len1: number = (someValue1 as string).length;
// 两种形式是等价的  然后, 当你在ts里面使用jsx时, 只有as 语法断言是被允许的
