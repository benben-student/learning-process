//filter  在一个Array中，删掉偶数，只保留奇数
var arr1 = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr1.filter(function (x) {
    return x % 2 !== 0;
})
console.log(r)

//把Array中的空字符串删掉，可以这么写：
var arr2 = ['312', '', '456', null, undefined, '789', '  '];
var rr = arr2.filter(function (s) {
    return s && s.trim()
})
console.log(rr)


//扩展：.trim()方法去除字符串的头尾空格:
var str = "       Runoob        ";
console.log(str.trim());


//filter()接收的回调函数可以有多个参数,通常我们仅使用第一个参数，表示Array的某个元素。
//回调函数还可以接收另外两个参数，表示元素的位置和数组本身：
var
    r;
arr3 = ['A', 'B', 'C'];
var rrr = arr3.filter(function (element, index, self) {
    console.log(element)
    console.log(index)
    console.log(self)
})


//filter，可以巧妙地去除Array的重复元素
var arr4 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
rrrr = arr4.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(rrrr.toString());
//去除重复元素依靠的是indexOf总是返回第一个元素的位置，后续的重复元素位置与indexOf返回的位置不相等，因此被filter滤掉了。


//用filter()筛选出素数：
//解:
function get_primes(arr) {
    return arr.filter((e, i, a) => {
        return e != 1 && a.filter(x => e % x == 0).length <= 2
    })
}
// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}

//Array的sort()方法就是用于排序的
console.log(['Google', 'Apple', 'Microsoft'].sort()); // ['Apple', 'Google', 'Microsoft'];
console.log(['Google', 'apple', 'Microsoft'].sort()); // ['Google', 'Microsoft", 'apple']

//要按数字大小排序，我们可以这么写：
var arr5 = [10, 20, 1, 2];
arr5.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(arr5); // [1, 2, 10, 20]

//如果要倒序排序，我们可以把大的数放前面：
//引上：
 var a=arr5.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]
console.log(a)


//find  find()方法用于查找符合条件的第一个元素.
//如果找到了，返回这个元素，否则，返回undefined：
var arr6 = ['A11', 'p22', 'o33'];
console.log(arr6.find(function(s){
    return s.toLowerCase()===s
}))
console.log(arr6.find(function(s){
     return s.toUpperCase()===s
}))


//findIndex()和find()类似，也是查找符合条件的第一个元素，
//不同之处在于findIndex()会返回这个元素的索引，如果没有找到，返回-1：
//引上：
console.log(arr6.findIndex(function(s){
    return s.toLowerCase()===s
}))//1
console.log(arr6.findIndex(function(s){
     return s.toUpperCase()===s
}))//0


//它也把每个元素依次作用于传入的函数，但不会返回新的数组。
//forEach()常用于遍历数组，因此，传入的函数不需要返回值：
var arr = ['chen', 'li', 'wang'];
arr.forEach(console.log); // 依次打印每个元素