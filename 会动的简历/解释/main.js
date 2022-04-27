function a(){
    setTimeout(function(){
        console.log('异步做事')
    },1000)
}
function b(){
    console.log('同步做事')
}
//异步做事
console.log(1)//不等上面的结果
//由于异步做事不等结果，所以会先执行1

//同步做事
console.log(1)//要等上面的结果
//用于同步做事等结果，所以要等做完事在执行1


//如果是做完事再打1---同步
//如果是不做完再打1---异步