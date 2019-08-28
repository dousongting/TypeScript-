class Animal {
    age: number;
    constructor(age: number) {
        this.age = age;
    }
    eat() {
        console.log('吃个大鸡腿');
    }
}

class Dog extends Animal{
    type: string;
    constructor(type: string, age: number) {
        // 要使用super
        super(age);
        this.type = type;
    }
    // 如果子类中出现了和父类相同名字的方法,则会进行覆盖
    // 也就是调用的时候, 调用的是子类中的方法了!
    eat () {
        console.log('我是狗对象中的eat方法');
    }
}
let dog = new Dog('哈士奇', 2);
dog.eat();
