interface PersonInterface {
    name: string,
    age: number,
    eat(food: string): string
}

// 使用implements 关键字 继承类类型接口
class XG implements PersonInterface {
    name: string = '小刚';
    age: number = 11;
    eat(food: string){
        return food
    }
}
let xiaogang = new XG();
xiaogang.eat('西瓜')