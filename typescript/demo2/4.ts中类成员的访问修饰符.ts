// ts 中类成员的访问修饰符
// 指的就是可以在类的成员前通过添加关键字来设置当前成员的访问权限
// - public: 公开的，默认   所有人都可以进行访问
// -  private： 私有的， 只能在当前类中进行访问
// -  protected： 受保护的，这能在当前类或者子类中进行访问

enum Colors { 
    red,
    yellow, 
    blue
}

class Car {
    public color: Colors;
    constructor() {
        this.color = Colors.red;
        this.run();
    };
    private run() {

    }
    protected loadPeople () {

    }
}

class Byd extends Car {
    protected sayHi() {
        console.log('失敬失敬');
        this.loadPeople();
    }
}
let bw = new Byd();
bw.color
// bw.loadPeople;
// bw.run
// bw.sayHi