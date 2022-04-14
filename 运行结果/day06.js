//用函数对Array的求和
function sum(arr) {
    return arr.reduce(function (x, y) {
        return x + y
    })
}
console.log(sum([1, 2, 3, 4, 5]))


//百度百科：
//闭包
/*
特点：
1.作为一个函数变量的一个引用，当函数返回时，其处于激活状态。
2.一个闭包就是当一个函数返回时，一个没有释放资源的栈区。
   javascript允许使用内部函数---即函数定义和函数表达式位于另一个函数的函数体内。
   而且，这些内部函数可以访问它们所在的外部函数中声明的所有局部变量、参数和声明的其他内部函数。
   当其中一个这样的内部函数在包含它们的外部函数之外被调用时，就会形成闭包
*/
function closure() {
    var str = 'i am very 666'
    return function () {
        alert(str);
    }
}
var fObj = closure();
fObj()