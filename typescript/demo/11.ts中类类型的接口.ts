interface PersonInterface {
    name: string,
    age: number,
    eat(): void
}

// 使用 implements 关键字
class XiaoMing implements PersonInterface {
    name: string = '小明';
    age: number = 19;
    eat() {

    }
}

class xg implements PersonInterFace {
    name: string = '小刚';
    age: number = 18;
    eat(): void {

    }
}

class xh implements PersonInterFace{
    name: string = '小红';
    age: number = 18;
    eat () {

    }
}

let xiaogang = new xg();
let xiaohong = new xh();
xiaogang.age;
xiaogang.name;
xiaogang.eat();
xiaohong.eat();