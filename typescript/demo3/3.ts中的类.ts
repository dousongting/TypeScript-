class People {
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

let X = new People('小明', 11);
X.age = 11;
X.sayHello('猴赛雷');
