interface SumInterface{
    (a: number, b: number): number
}
let sum: SumInterface = function (a: number, b: number) {
    return a + b ;
}