// ts 中的接口

// 接口 可以理解为一个规范 一个约定
// 使用interface 关键字定义接口

// 接口初探
// 定义一个ajax 的接口 我们需要 url type data success
interface AjaxOptions {
    url: string,
    type: string,
    data?: object, // 可选属性 ?
    success(data: object): void
    [propname: string]: any // 额外的属性检查
}

// options 需要的参数有  url type data success

function ajax(options: AjaxOptions){
    
}
ajax({
    url: 'https://www.baidu.com',
    type: 'post',
    // data: {},
    success(data){

    },
    // error() {

    // }
    cache: true
})


interface Point {
    readonly x: number; // 只读属性
    y?: number; // 可选属性
    [propName: string]: any // 额外的属性检查
}
let poi: Point = {
    x: 10,
    // y: 20,
    z: 11,
    g: 12,
    h: 22
}
// poi.x = 11