//一：
//1.会动的简历
//2.做了一只皮卡丘
//3.会动的简历，利用html，css把皮卡丘在简历上画出来



//二：
//1.面向对象编程：
//a&&b&&c   只要有一个为false,则整个为false => 0
console.log(1 && 4 && 1)
console.log(2 && 1 && 0)
//a||b||c   只要有一个为true,则整个为true => 1
console.log(1 || 12 || 0 || undefined)
console.log(23 || 34 || 56 || true)//若都为true,则打印出第一个值
var app = app || {}
//等价于
if (app) {
    app = app
} else {
    { }
}



//2.创建对象
//创建对象
//创建一个Array对象
var arr = [1, 2, 3]//他的原型链是：
//arr--->Array.prototype-->Object.prototype-->null
//当创建一个函数时
function bbb() {
    return 0
}  //函数的原型对象是：
//foo-->Function.prototype-->Object.prototype-->null



//3.构造函数
//js除了用{...}来创建对象，也可以用构造函数的方法来创建对象
//用法：先定义一个构造函数
function ABC(name) {
    this.name = name
    this.hello = function () {
        alert('hello' + this.name + '!')
    }
}
//在js中可以用new来调用这个函数，并返回一个对象
var liu = new ABC('六')
ll = liu.name
console.log(ll)
hh = liu.hello()
console.log(hh)//如果不写new他就是一个普通函数，写了就是一个构造函数
//新创建的benben的原型链是：
//benebn-->CCC.prototype-->Object.prototype-->null


