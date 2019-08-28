class Person {
    // 和es6 不同的是: ts 中属性必须声明,需要指定类型
    name: string;
    // 声明好属性之后, 必须赋值一个默认值或者在构造函数中进行初始化
    // age: number = 10;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    sayHello(msg: string): void {
        console.log(msg);
    }
}
let xm = new Person('小明', 11);
xm.sayHello('大家好');
