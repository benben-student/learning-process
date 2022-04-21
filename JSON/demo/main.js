myButton.addEventListener('click',(e)=>{
    let request=new XMLHttpRequest()
    request.open('get','http://jack.com:8002/xxx')//配置requset
    request.send()
    request.onreadystatechange=()=>{
        if(request.readyState===4){
            console.log('请求相应都完毕了')
            console.log(request.status)
            if(request.status>=200&&request.status<=300){
            console.log('请求都已成功')
            console.log(typeof request.responseText)
            console.log(request.responseText)
            let string=request.responseText
            //把符合JSON语法的字符串
            //转换成JS对应的值
            let object=window.JSON.parse(string)
            //JSON.parse是浏览器提供的
            console.log(typeof object)
            console.log(object)
            console.log('object.note')
            console.log(object.note)

        }else if(request.status>=400){
                console.log('请求已经失败')
            }
        }
    }
   
})