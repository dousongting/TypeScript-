// ts 中接口的继承


// 接口继承接口
interface PointTwoInterface {
    x: number;
    y: number;
}
interface PointThreeInterface {
    z: number
}

interface PointFourInterface extends PointThreeInterface, PointTwoInterface {
    time: Date
}

let poi1: PointFourInterface = {
    x: 1,
    y: 2,
    z: 3,
    time: new Date()
}

// 接口继承类

class Bird {
    type: string;
    eat():void {

    }
}

interface Fly extends Bird {
    fly():void
}

let flyBird: Fly = {
    type: '黄鹂',
    eat(): void{

    },
    fly(): void {

    }
}