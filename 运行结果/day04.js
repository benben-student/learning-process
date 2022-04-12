//函数f(x)=x2，要把函数作用在数组[1, 2, 3, 4, 5, 6, 7, 8, 9]上，就可以用map实现如下：
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);


//map还可以 把Array的所有数字转为字符串：
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map(String))

//reduce  对一个Array求和，就可以用reduce实现
var arr2 = [1, 3, 5, 7, 9];
a=arr2.reduce(function(x,y){
    return x+y
})
console.log(a)


//练习：利用reduce()求积：
//解：
function product(arr) {
    return arr.reduce((x,y)=>x*y);/*   箭头函数
           Javascript函数常用写法：
       function sum(x,y){return x+y;}
       var res=sum(3,4);
       const sum2=function(x,y){return x+y;}
       var res=sum2(3,4);
            对比如上
       const fn=(x)=>{return x;}
       const fn=x=>{return x;}
       const sum=(x,y)=>{return x+y;}
       const sum=(x,y)=>x+y;
    */
    }
// 测试:
if (product([1, 2, 3, 4]) === 24 && product([0, 1, 2]) === 0 && product([99, 88, 77, 66]) === 44274384) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}



//reduce()也能把[1, 3, 5, 7, 9]变换成整数13579
var arr3 = [1, 3, 5, 7, 9];
b=arr.reduce(function(x,y){
    return x*10+y
})
console.log(b)
