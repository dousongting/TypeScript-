// ts 中的接口 
// 使用intereface 定义接口
// 接口 是一个约定或者是规范

// 接口初探
// 我们定义一个ajax 的接口 有url type data success 
interface AjaxOptions {
    url: string,
    type?: string,
    data?: object, // 可选属性
    success(data: object):void
}

function ajax(options: AjaxOptions) {

}
ajax({
    url: 'https://www.baidu.com',
    // type: 'post',
    // data: {},
    success(data){}
})

// 只读属性 
interface PointOne {
    readonly x: number
    y:number
    // 额外的属性检查
    [popName: string]: any
}

let poi: PointOne = {
    x : 11,
    y : 12,
    z: 11,
    q: 21
}
// poi.x = 1; // 只读属性
poi.y = 11;