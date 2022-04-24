一:主线

1.JSON:请求方式

link请求

image请求

post请求

get请求

2.AJAX原生ajax

二：学习笔记

1：箭头函数

x => x * x相当于

  function (x) {

​    return x * x;

  }

2.把[1,2,3,4]转化为['1','2','3','4']，['1','2','3','4']转化为[1,2,3,4]

var obj=[1,2,3]//声明

var aa=obj.join('-')//对数组里的数据加'-'

console.log(aa)//['1'-'2'-'3-'4']

var bb=aa.split('-')

console.log(bb)//['1','2','3,'4']

var cc=aa.split('-').map(item=>Number(item))//[1,2,3,4]





