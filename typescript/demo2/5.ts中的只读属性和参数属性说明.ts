class Point {
    // 只读属性
    readonly x: number = 11;
    y: number;
}
let p = new Point();
p.x
p.y = 12;

class Cat {
    readonly name: string;
    // type: string
    // 参数属性 
    constructor(public type: string) {
        this.name = '加菲';
        this.type = type;
    }
}
let cat = new Cat('橘猫');
// cat.name = '是是是'
