const express = require('express')
const app = express();
app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('HELLO AJAX')
})
app.post('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Header', '*')
    response.send('HELLO AJAX POST')
})
app.all('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    //响应头    
    response.setHeader('Access-Control-Allow-Header', '*')
    //设置响应体
    response.send('HELLO AJAX POST')
})
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Header', '*')
    //响应一个数据
    const data={
        name:'chenben'
    }
    //对对象进行字符串转化
    let str=JSON.stringify(data)

    response.send(str)
})
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中...')
})
