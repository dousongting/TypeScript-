class Person1 {
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    sayHello(msg: string): void {
        console.log(msg)
    }
}
// 使用extends 实现继承
class Person2 extends Person1 {
    job: string;
    constructor(name: string, age: number, job: string) {
        super(name,age);
        this.job = job;
    };
    eat():void {
        console.log('吃个大鸡腿');
    };
    // 如果子类中出现和父类相同名字的方法,则会把父类中的进行覆盖.
    // 也就是调用的时候 调用的是子类中的方法
    sayHello(){
        console.log('少时诵诗书说');
    }
}
let xh = new Person2('小红', 12, 'student');
xh.eat();
// xh.sayHello('哈哈哈哈哈哈哈');
xh.sayHello();