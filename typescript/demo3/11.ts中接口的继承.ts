// ts中接口的继承 
// 接口继承接口

interface TwoPointInterface {
    x: number;
    y: number;
}
interface ThreePoinInterface {
    z: number;
}

interface FourPointInterface  extends TwoPointInterface, ThreePoinInterface{
    time: Date;
}


let superPoint:FourPointInterface = {
    x: 1,
    y: 2,
    z: 4,
    time: new Date()
}




// 接口继承类

class Bird {
    type: string = '黄鹂';
    eat(): void {

    }
}

interface Fly extends Bird {
    fly(): void
}

let flyBird: Fly = {
    type: '啄木鸟',
    eat(): void{

    },
    fly(): void {

    }
}