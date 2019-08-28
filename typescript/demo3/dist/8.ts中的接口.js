"use strict";
// ts 中的接口
// options 需要的参数有  url type data success
function ajax(options) {
}
ajax({
    url: 'https://www.baidu.com',
    type: 'post',
    // data: {},
    success: function (data) {
    },
    // error() {
    // }
    cache: true
});
var poi = {
    x: 10,
    // y: 20,
    z: 11,
    g: 12,
    h: 22
};
// poi.x = 11
