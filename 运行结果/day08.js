//最外层括号是额外加上去的，防止编辑器报错


//箭头函数
(x => x * x)//相当于
    (function (x) {
        return x * x;
    })
    //如果参数不是一个，就需要用括号()括起来
    ((x, y) => x * y + y * y)
    (() => 3.14)
    ((x, y, ...rest) => {
        var i, sum = x + y;
        for (i = 0; i < rest.length; i++) {
            sum += rest[i];
        }
        return sum;
    })
    //如果要返回一个对象
    (x => ({ foo: x }))
// 箭头函数完全修复了this的指向，this总是指向词法作用域，也就是外层调用者obj：
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
};
a = obj.getAge
console.log(a)



//练习
//请使用箭头函数简化排序时传入的函数：
//解：
var arr = [10, 20, 1, 2];
arr.sort((x, y) => {
    day = 234;
    var a = {
        day: 123,
        getday: () => { () => this.day }
    }
    console.log(a.getday())//undefined
});
console.log(arr); // [1, 2, 10, 20]