// 1. 安装TypeScript
// npm install -g typescript

// 查看版本
// tsc --v

// 编译 单个文件
// tsc xxx.ts
 
// 2. 创建ts配置文件 tsconfig.json
// tsc --init
// 常用的几个配置项
// target: 指的是将ts代码转成哪个版本的js代码  可以是es3 es5 es6 ...
// module: 指的是将ts代码转换成js代码之后,使用的模块化标准是什么  可以是commonjs / nodejs
// strict: 指的是是否将ts代码转换成严格模式的js代码
// outDir: 指的是将ts代码转换成js代码之后. js代码存放在哪个文件夹路径
// rootDir: 编写的ts代码存放的路径

// 使用配置文件
// tsc -p ./tsconfig.json