// 接口
// 接口我们可以理解为一个约定, 一个规范


// 接口使用 interface 进行声明
interface AjaxOptions {
    url: string,
    type: string,
    data: object,
    success(data: object): void
}
// options参数中 需要包含 url, type, data, success 
function ajax(options: AjaxOptions) {

}
ajax({
    url:'https://www.baidu.com',
    type: 'post',
    data:{},
    success(data) {

    }
})

// 只读属性
 interface Poin {
    readonly x: number, // 只读属性
    y: number,
    [propName: string]: any // 额外的类型检查
 }
 let pos: Poin = {
     x: 10,
     y: 20,
     z: 40
 }

//  pos.x = 40; // error

