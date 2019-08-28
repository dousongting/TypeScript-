//13. 接口
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约


// 接口初探
function printLabel(labelledObj: {label: string}) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: 'size 10 object'};
printLabel(myObj);
// 类型检查器会查看printLabel 的调用, printLabel 有一个参数, 并要求这个对象参数有一个名为label 类型为string的属性
// 需要注意的是,我们传入的对象参数实际上会包含很多属性,但是编译器只会检查哪些必需的属性是否存在,并且其类型是否匹配,
// 然而, 有时候ts却并不会这么宽松,
// 我们这次使用接口来描述,必须包含一个label属性且类型为string:

// 我们使用intreface 来定义接口

interface LabelledValue {
    label: string;
}

function printLabel1(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj1 = { size: 10, label: 'size 10 object'};

printLabel1(myObj1);

// LabelledValue 接口就好比一个名字, 用来描述上面例子里的要求, 它代表了有一个label 属性 且类型为string的对象.
// 需要注意的是,我们在这里并不能像其他语言里一样,说传给printLabel 的对象实现了这个接口,我们只会去关注值的外形,只要传入的对象满足上面提到的必要条件,那么他就是被允许的


// 还有一点值得提的是,类型检查器不会去检查属性的顺序,只要相应的属性存在并且类型也是对的就可以

// 可选属性

// 接口里面的属性不会都是必需的,有些是只在某些条件下存在,或者根本不存在, 可选属性在应用'option bags'模式时很常用
// 即给函数传入的参数对象中只有部分属性赋值了.

interface SquareConfig { 
    color?: string;
    width?: number
}

//  function createSquare(config: SquareConfig): {color: string, area: number} {
//     let newSquare = {color: 'white', area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//  }

//  let mySquare = createSquare({color: 'black'});
 // 带有可选属性的接口与普通的接口定义差不多, 只是在可选属性名字定义的后面加一个? 符号;

 // 可选属性的好处质疑是可以对可能存在的属性进行预定义, 
 // 优点2: 可以捕获引用了不存在的属性时的错误, 比如, 我们故意将createSquare 的 color 属性名拼错. 这时候, 我们就会得到一个错误提示:

//  function createSquare(config: SquareConfig): {color: string, area: number} {
//      let newSquare = {color: 'red', area: 100};
//      if (config.colr) { // 报错
//         newSquare.color = config.color;

//      }
//      if (config.width) {
//          newSquare.area = config.width * config.width;
//      }
//      return newSquare;
//  }
 
//   let mySquare = createSquare({color: 'yellow'});

// 只读属性 
// 一些对象属性只能在对象刚刚创建的时候修改其值. 你可以在属性名前用 readonly 来指定只读属性:
interface Point {
    readonly x1: number;
    y1: number;
};
// 你可以通过赋值一个对象字面量来构造一个Point, 赋值后,x1就再也不能被改变; 
let p: Point = {x1:10, y1:20};
// p.x1 = 101;  // error
// ts 具有ReadonlyArray<T>类型, 它与Array<T>相似, 只是把所有可变方法去掉了, 因此可以确保数组创建之后再也不能被修改:

let a1: number[] = [1,2,3,4,5];
let ro: ReadonlyArray<number> = a1;
// ro[0] = 12; // error
// ro.push(111);
// ro.length = 100;
// a1 = ro; // 可以看到就算把整个ReadonlyArray 赋值到一个普通数组也是不可以的, 但是你可以用类型断言重写

a1 = ro as number[];

// readonly vs const
// 最简单判断该用 readonly 还是const的方法 是看要把它当做为变量使用 还是做为一个属性, 
// 作为变量使用的话 用 const
// 作为属性则使用 readonly

// 额外的属性检查
// 我们在第一个例子里使用了接口,ts让我们传入 {size: number, label: string}
























