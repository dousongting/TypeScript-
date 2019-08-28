// class People {
//     name: string = ''
// }
// let p1 = new People();
// p1.name = 'S是的是的沙发地方的';

 
class People {
    private _name:string = "";
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value.length < 2 || value.length > 5) {
            throw new Error('名字不合法,请重新输入');
        }
        this._name = value;
    }
}

let p1 = new People();
p1.name = '是的是的是打算';
console.log(p1.name);
  