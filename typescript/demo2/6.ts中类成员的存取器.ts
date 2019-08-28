// ts 中类成员的存取器
// 假设我们要输入一个名字
// class People {
//     name: string;
// }
// let people = new People();
// people.name  ='了会计师建档立卡就是';

// 我希望输入的这个名字长度有限制 而且还要受保护
// 改造一下
class People1 {
    private _name: string;
    get name():string {
        return this._name;
    }
    set name(value: string) {
        if(value.length < 2 || value.length > 5){
            throw new Error ('名字不合法!');
        }
        this._name = value
    }
}

let p1 = new People1();
p1.name = '实打实大法师法第三方是';