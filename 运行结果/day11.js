var Student={
    name:'Robot',
    height:1.2,
    run:function(){
        console.log(this.name+'is running...')
    }
}
 var xiaoming={
     name:'小明'
 }
 xiaoming.__proto__=Student
 //最后一行xiaoming的原型对象指向了Student
 

var a=xiaoming.name
 console.log(a)
 //打印出小明
 var b=xiaoming.run()
 console.log(b)
 //你以为是undefined，不。
//因为xiaoming有自己的name属性，但没定义run()方法
//但是小明是从Student继承过来的，只要Student有run()方法，xiaoming就可以调用

