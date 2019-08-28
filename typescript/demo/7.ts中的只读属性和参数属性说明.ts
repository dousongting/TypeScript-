class Cat {
    readonly name: string;
    // type: string
    constructor(public type: string) {
        this.name = '加菲'
        this.type = type
    }
}
let cat = new Cat('橘猫');
// cat.name = 'qqq';
