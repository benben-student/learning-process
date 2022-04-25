//一:主线

//1.请求方式
//link请求
var link=document.createElement('link')
link.rel='stylesheet'
link.href='/xxx'
document.head.appendChild(link)

//image请求
var image=document.createElement('img')
image.src='/xxx'
document.body.appendChild(image)
image.onload=function(){
    console.log('s')
}
image.onerror=function(){
    console.log('f')
}

//post请求
         /*
              <form action="/xxx" method=post>
                <input type="password" name="password"></input>
                <input type='submit'></input>
              </form>
          */

//get请求
        /*
        <form action="/xxx" method=get>
             <input type="password" name="password">
             <input type="submit">
       </form>
        */
//2.AJAX原生ajax

//二：学习笔记

//1：箭头函数

//x => x * x相当于

  /*function (x) {

​    return x * x;

  }*/

//2.把[1,2,3,4]转化为['1','2','3','4']，['1','2','3','4']转化为[1,2,3,4]

var obj=[1,2,3]//声明

var aa=obj.join('-')//对数组里的数据加'-'

console.log(aa)//['1'-'2'-'3'-'4']

var bb=aa.split('-')

console.log(bb)//['1','2','3,'4']

var cc=aa.split('-').map(item=>Number(item))//[1,2,3,4]





