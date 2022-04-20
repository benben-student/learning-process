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

//toLowerCase  变为小写
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

//indexOf  Array可以通过indexOf()来搜索一个指定的元素的位置
var arr = [10, 20, '30', 'xyz'];
arr.indexOf(10); // 0
arr.indexOf(20); //1
arr.indexOf(30); //未找到-1
arr.indexOf('30'); //2

//slice  它截取Array的部分元素，然后返回一个新的Array
var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr.slice(0,3) // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr.slice(3)// 从索引3开始到结束: ['D', 'E', 'F', 'G']
//如果不给slice()传递任何参数，它就会从头到尾截取所有元素。利用这一点，我们可以很容易地复制一个Array：

//push和pop
var arr=[1,2]
arr.push('a','b') // 返回Array新的长度: 4
console.log(arr);// [1, 2, 'A', 'B']
arr.pop(); // pop()返回'B'
console.log(arr); // [1, 2, 'A']

//unshift和shift
var arr = [1, 2];
arr.unshift('A', 'B'); // 返回Array新的长度: 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]

//sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序：
var arr=['b','c','a']
arr.sort();
console.log(arr);//['a','b','c']

//reverse 把整个Array的元素给调个个，也就是反转：[后面会有数组反转]
var arr=['abc','123','-=-']
arr.reverse()
console.log(arr) // ['three', 'two', 'one']

//splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
var arr = ['1', '2', '3', 'sd', 'qw', 're'];
arr.splice(2,3,'666','888')
console.log(arr)

//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array
var arr = ['A', 'B', 'C'];
var jia=arr.concat([111,222,666])
console.log(jia)

//join()方法是一个非常实用的方法，它把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串：
var shuzu=['111','222','333','666','444','888','789']
console.log(shuzu.join('-'))
console.log(shuzu.join('+'))
console.log(shuzu.join('_'))//可随意加任何符号~~~

// 多维数组
// 如果数组的某个元素又是一个Array，则可以形成多维数组，例如：



// 1.  上述Array包含3个元素，其中头两个元素本身也是Array。
// 练习：如何通过索引取到500这个值：
//解：  
var arr = [[1, 2, 3], [400, 500, 600], '-'];
var x=arr[1]
var y=x[1]
console.log(y)


//2.  练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：
//解：
var arr = ['小明', '小红', '大军', '阿黄'];
var a=arr.sort
console.log("欢迎"+arr+'同学');