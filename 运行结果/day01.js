/*
数据类型{
    1.Number
    2.String
    3.boolean
    4.null和undefined
}
*/
var x = 100;
console.log(x);
/*
对象
JavaScript的对象是一组由键-值组成的无序集合，例如
*/
var person={
    name:'Bob',
    age:20,
    tags:['js','web','mobile'],
    city:'BeiJIng',
    hasCar:true,
    zipcode:null
}
console.log(person);
/*
如果字符串内部既包含'又包含"怎么办？可以用转义字符\来标识，比如：
*/
console.log('I\'m \"OK\"!')

/*toUpperCase()把一个字符串全部变为大写：*/
var s='Hello'
s.toUpperCase//HELLO

//toLowerCase
var lower=s.toLowerCase
lower;//hello

//indexOf
var s = 'hello, world';
console.log(s.indexOf('world')); // 7
s.indexOf('World'); //-1

/*
数组
JavaScript的Array可以包含任意数据类型，并通过索引来访问每个元素。
*/
var arr=[1,2,3.14,,'hello',null,true]
console.log(arr.length)
/*
indexOf
*/
