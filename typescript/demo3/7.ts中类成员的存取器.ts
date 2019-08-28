// ts 中类成员的存取器

// 
// class UserName {
//     name: string = ''
// }

// let p = new UserName();

// p.name = '1111三打两建萨拉肯德基理科';

// 我们想要做一些校验
class UserName {
    // 通常会这样写
    private _name: string = '';
    get name():string {
        return this._name
    }
    set name(val) {
        if(val.length < 2 || val.length > 5){
            throw new Error('名字不合法!');
        }
        this._name = val;
    }
}

let p = new UserName();
p.name = '三';