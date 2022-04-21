//Date
var now = new Date()
console.log(now)
a = now.getFullYear()
console.log(a)
b = now.getMonth()
console.log(b)
c = now.getDate()
console.log(c)
d = now.getDay()
console.log(d)
e = now.getHours()
console.log(e)
f = now.getUTCMinutes()
console.log(f)
g = now.getSeconds()
console.log(g)

var arr=[1,2,3,4]
var a=arr.join('-')//变为[1-2-3-4]
console.log(a)
var b=a.split('-')//变为['1','2','3','4']
console.log(b)
var c=a.split('-').map(item=>Number(item))//变为[1,2,3,4]
console.log(c)

//引上
var arr1=[11,22,33,44]
var aa=arr1.join('-')
console.log(aa)
var bb=aa.split('-')
console.log(bb)
var cc=aa.split('-').map(item=>Number(item))
console.log(cc)