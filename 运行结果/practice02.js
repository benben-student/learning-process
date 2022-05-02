//.join()
var brr=['1','2','3','a','b','c']
var nnn=brr.join('-')
console.log(nnn)

//.split()
var string='123'
var aa=string.split('')//给所有加上''
console.log(aa)//"1""2""3"

var bbb=string.split('',2)//返回前两个
console.log(bbb)//'1''2'

var aac='2:3:4'
var ccc=aac.split(':')
console.log(ccc)//将返回'2''3''4'
// 用|也一样







var hhh=[1,2,3]
var aaa=hhh.join('-')
console.log(aaa)
var bbbb=aaa.split('-')
console.log(bbbb)
var cccc=aaa.split('-').map(item=>Number(item))//箭头函数  相当于function(item){return  Number(item)}
console.log(cccc)








//练习
var abcd=[1,2,3,4,5,6,7]
var aaaa=abcd.join('-')
console.log(aaaa)
var bbb=aaaa.split('-')
console.log(bbb)
var ccc=aaaa.split('-').map(item=>Number(item))
console.log(ccc)