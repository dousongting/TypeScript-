// ts 中函数类型的接口

interface SumInterface {
    (a: number, b: number): number
}
let sums:SumInterface = function(a: number, b:number){
    return a + b;
}