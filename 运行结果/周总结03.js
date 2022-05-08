//一
//1.会动的皮卡丘
//js代码
!function () {
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('styleTag')
        let n = 0
        let id = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
           container.scrollTop=container.scrollHeight
            if (n >= code.length) {
                window.clearInterval(id)
                fn && fn.call()
            }
        }, 0)
    }
    let code = `.preview{
        height: 100%;
        border: 1px solid green;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .wrapper{
        width: 100%;
        height: 165px;
        position: relative;
    }
 
    .nose{
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }
    .eye{
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }
    .eye::before{
        content: '';
        display: block;
        height: 24px;
        width: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }
    .eye.left{
        right: 50%;
        margin-right: 90px;
    }
    .eye.right{
        left: 50%;
        margin-left: 90px;
    }
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
    .face.left{
        right: 50%;
        margin-right: 116px;
    }
    .face.right{
        left: 50%;
        margin-left: 116px;
    }
    .upperLip{
        height: 25px;
        width: 80px;
        border: 2px solid black;
        position: absolute;
        top: 50px;
        background: #FDE348;
    }
    .upperLip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .upperLip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    .lowerLip-wrapper{
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        height: 110px;
        overflow: hidden;
        width: 300px;
    }
    .lowerLip{
        width: 300px;
        height: 3500px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    .lowerLip::after{
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background-color: #FC4A62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    }`
    writeCode('', code)
}.call()

//2.cookie注册与登录
//js代码
let $form = $('#signUpForm')
$form.on('submit', (e) => {
    e.preventDefault()
    let hash = {}
    let need = ['email', 'password', 'password_confirmation']
    need.forEach((name) => {
        let value = $form.find(`[name=${name}]`).val()
        hash[name] = value
    })
    $form.find('.error').each((index, span) => {
        $(span).text('')
    })
    if (hash['email'] === '') {
        $form.find('[name="email"]').siblings('.error')
            .text('填邮箱啊同学')
        return
    }
    if (hash['password'] === '') {
        $form.find('[name="password"]').siblings('.error')
            .text('填密码啊同学')
        return
    }
    if (hash['password_confirmation'] === '') {
        $form.find('[name="password_confirmation"]').siblings('.error')
            .text('确认密码啊同学')
        return
    }
    if (hash['password'] !== hash['password_confirmation']) {
        $form.find('[name="password_confirmation"]').siblings('.error')
            .text('密码不匹配')
        return
    }
    $.post('/sign_up', hash)
        .then((response) => {
            console.log(response)
        }, (request) => {
            let { errors } = request.responseJSON
            if (errors.email && errors.email === 'invalid') {
                $form.find('[name="email"]').siblings('.error')
                    .text('邮箱格式错误')
            }
        })
})

//二：Ajax
//1.IE缓存问题
//js代码
const btn=document.getElementsByTagName('button')[0]
const result=document.querySelector('#result')
btn.addEventListener('click',function(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','http://127.0.0.1:8000/ie?t='+Date.now())
    xhr.send()
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status>=200&&xhr.status<300){
                result.innerHTML=xhr.response
            }
        }
    }
})

//2.重复请求问题
//js代码
 //获取元素对象
 const btns = document.querySelectorAll('button')
 let x = null
 //标识变量
 let isSending=false;//是否正在发送AJAX请求
 
 btns[0].onclick = function () {
     //判断标识变量
     if(isSending) x.abort()//如果正在发送，则取消该请求，创建一个新的请求
     x = new XMLHttpRequest()
     //修改 标识的变量
     isSending=true
     x.open('GET', 'http://127.0.0.1:8000/delay')
     x.send()
     x.onreadystatechange=function(){
         if(x.readyState===4){
             //修改标识变量
             isSending=false
         }
     }
 }
 //abort
 btns[1].onclick = function () {
     x.abort()
 }
n
//3.超时与网络异常
//js代码
const btnn = document.getElementsByTagName('button')[0]
        const resultt = document.querySelector('#result')
        btn.addEventListener('click', function () {
            const xhr = new XMLHttpRequest();
            //超时设置2s设置
            xhr.timeout=2000
            //超时回调
            xhr.ontimeout=function(){
                alert('网络异常，请稍后重试！！')
            }
            xhr.onerror=function(){
                alert('你的网络好像出了一点问题！！')
            }
            xhr.open('GET', 'http://127.0.0.1:8000/delay')
            xhr.send()
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        result.innerHTML = xhr.response
                    }
                }
            }
        })

//4.jQuery,POST,GET,AJAX方法集合
//js代码
$('button').eq(0).click(function(){
    $.get('http://127.0.0.1:8000/jquery-server',{a:100,b:200},function(data){
        console.log(data)
    },'json')
})
$('button').eq(1).click(function(){
    $.post('http://127.0.0.1:8000/jquery-server',{a:100,b:200},function(data){
        console.log(data)
    })
})
$('button').eq(2).click(function(){
    $.ajax({
        //url
        url:'http://127.0.0.1:8000/jquery-server',
        //参数
        data:{a:100,b:200},
        //请求类型
        type:'GET',
        //响应体结果
        dataType:'json',
        //成功的回调
        success:function(data){
            console.log(data)
        },
        //超时时间
        timeout:2000,
        //失败的回调
        error:function(){
            console.log('出错了!!')
        },
        //头信息
        headers:{
            c:300,
            d:400
        }
    })
})