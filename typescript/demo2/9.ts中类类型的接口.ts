// ts 中类类型的接口
interface PersonInterface {
    name: string,
    age: number,
    eat(food: string): string
}

// 使用 implements 关键字 继承 类类型接口

class Xm implements PersonInterface {
    name:string = "小明";
    age:number = 11;
    eat(food: string) {
        return food
    }
}
class Xh implements PersonInterface {
    name: string = '小红';
    age: number = 11;
    eat(food: string) {
        return food
    }
}

let xiaoming = new Xm();
xiaoming.eat('可乐');
xiaoming.age;
xiaoming.name;
let xiaohong = new Xh();
xiaohong.name;
xiaohong.age;
xiaohong.eat('炸鸡');