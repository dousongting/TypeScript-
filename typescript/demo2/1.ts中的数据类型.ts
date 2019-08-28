// ts支持与js几乎相同的数据类型,还提供了几个其他类型方便我们使用

// 布尔值
// let isDone: boolean = true;
// let isDone: boolean = [];

// 数字
// let num: number = 1;
let num: number = NaN;
let num1:number = Infinity;
// let num2: number = 0xf00d;
let num2: number = 0o744;

// 字符串
// let str: string = '123';
let str: string = `ssss`;
let user2: string = '小明';
let sentence: string = `名字:${user},年龄: ${num}`;

// 数组 有两种方式可以定义数组,
// 第一种
// let list1: number[] = [1,2,3];
// let list1: number[] = ['1',2,3];

//第二种
// let list2: Array<number> = [1,2,3,4];
// let list2: Array<number> = [1,'2',3,4];


// 元祖 tuple
// 元祖类型允许表示一个已知元素数量和类型的数组,各元素类型不必相同
let t: [string, number];
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
enum Color {
    Red = 1,
    Green = 2,
    Blue = 0
}
let c: Color = Color.Blue; // 0
let c1: Color = Color.Red; // 1
let c2: Color = Color.Green; // 2
// alert(c);
// alert(c1);
// alert(c2);

// 任意值  any
// Emmm...就是什么类型都行，当你无法确认在处理什么类型时可以用这个。
// 但要慎重使用，用多了就失去使用Ts的意义。
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure.sss();

let prettySure: Object = 4
// prettySure.toFixed();

// 当你只知道一部分数据类型时, any类型也是有用的,
// 它可以包含不同类型的数据
let list: any[] = [1, true, 'ddd'];
list[4] = 'kkk';

// 空值 void
// 没有任何类型
function warnUser(): void {
    alert ('this is a warning message');
    // return 'sss' // 不能使用return 关键字
}

// 使用return 关键字 必须定义返回的类型
function sum(a: number, b: number): number {
    return a + b
} 

// null 和 undefined
let u: undefined = undefined;
let n: null = null

// Never
// 表示那些永不存在的值的类型,例如: 那些总会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
// 变量也可能是Never 类型, 当他们被永不为真的类型保护所约束时

// 返回never的函数必须存在无法达到的终点
function error(msg: string): never {
    throw new Error(msg);
}

// 推断的返回值为never
function fail(): never {
    return error('something failed');
}
// 死循环
function infiniteLoop(): never {
    while(true) {

    }
}

// object 类型 表示非原始类型 
function create(o: object | null): void{

}
create({p:0});
create(null);
// create(42);

// 类型断言 
// 简单的说 就是可以用来手动指定一个值的类型
// 类型断言有两种方式.其中一种是' 尖括号'语法

let something: any = 'this is a string';
let strLengthh: number = (<string>something).length;

// as 语法
let something1: any = 'this is a string';
let strLength1: number = (something as string).length;
// 如果你在ts 里面使用jsx 只支持as 语法断言
