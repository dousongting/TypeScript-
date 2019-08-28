// 接口继承接口
interface TwoPoint {
    x: number,
    y: number
}
interface ThreePoint {
    z: number
}
interface FourPoint extends ThreePoint, TwoPoint {
    time: Date
}

let poi2: FourPoint = {
    x: 100,
    y: 200,
    z: 300,
    time: new Date()
}

// 接口继承类
class Bird {
    type: string = '画眉鸟';
    fly():void {

    }
}
interface Fly extends Bird {

}
let flyingBrid: Fly = {
    type: '啄木鸟',
    fly(): void {

    }
}