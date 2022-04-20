//.join()
var arrr=['1','2','3','a','b','c']
var abc=arrr.join('-')
console.log(abc)



//.split()
var str='123'
var a=str.split('')//给所有加上''
console.log(a)//"1""2""3"

var b=str.split('',2)//返回前两个
console.log(b)//'1''2'

var str1='2:3:4'
var c=str1.split(':')
console.log(c)//将返回'2''3''4'
// 用|也一样



//[]转化为'' , ''转化为[]
var obj=[1,2,3]
var aa=obj.join('-')
console.log(aa)
var bb=aa.split('-')
console.log(bb)
var cc=aa.split('-').map(item=>Number(item))//箭头函数  相当于function(item){return  Number(item)}
console.log(cc)