//创建对象
//当用obj.xxx访问一个对象属性时，js引擎会先在该对象上查找该属性，若没有就到其原型对象上找，若还没有找到，就一直找到Object.prototype对象上，最后如果还是没找到，就会返回undefined

//创建一个Array对象
var aaa=[1,2,3]//他的原型链是：
//arr--->Array.prototype-->Object.prototype-->null


//当创建一个函数时
function bbb(){
    return 0
}  //函数的原型对象是：
 //foo-->Function.prototype-->Object.prototype-->null



 //构造函数
 //js除了用{...}来创建对象，也可以用构造函数的方法来创建对象
 //用法：先定义一个构造函数
 function CCC(name){
     this.name=name
     this.hello=function(){
         alert('hello'+this.name+'!')
     }
 }
 //在js中可以用new来调用这个函数，并返回一个对象
 var benben=new CCC('奔奔')
aa= benben.name
console.log(aa)
bb=benben.hello()
console.log(bb)//如果不写new他就是一个普通函数，写了就是一个构造函数

//新创建的benben的原型链是：
//benebn-->CCC.prototype-->Object.prototype-->null

