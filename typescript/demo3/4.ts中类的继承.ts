class Person {
    // 和es6不同的是, ts中属性必须声明 需要指定类型
    name: string ='11'
    //声明好的属性之后 必须赋值一个默认值或者在构造函数中进行初始化
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };
    sayHello(msg: string): void {
        console.log(msg);
    }
}

class Xh extends Person {
    constructor(name: string, age: number) {
        super(name, age);
    }
    hobby(msg: string): void {
        console.log(msg);
    }
}

let xiaohong = new Xh('小红', 11);
xiaohong.sayHello('我是小红');
xiaohong.hobby('吃');


class Animal {
    age: number
    constructor(age: number) {
        this.age = age
    }
    eat(): void {
        console.log("吃个大鸡腿");
    }
}

class Dog extends Animal {
    type: string
    constructor(age: number, type: string) {
        super(age);
        this.type = type;
    }
    // 子类中如果出现了和父类同名的方法，则会进行覆盖
    // 也就是调用的时候，调用的就是子类中的方法了！
    eat():void {
        console.log('我是狗对象中的eat');
    }
}

let dog = new Dog(1, '金毛');
dog.eat();
