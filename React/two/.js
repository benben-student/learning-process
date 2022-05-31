var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url
  var queryString = ''
  if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('方方说：含查询字符串的路径\n' + pathWithQuery)

  if (path === '/') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
      <!DOCTYPE html>
      <head>
        <link rel="stylesheet" href="/style"/>
      </head>

      <body>

         <script src="/main"></script>
      </body>
    `)
    response.end()
  } else if (path === '/sign_up' && method === 'GET') {
    let string = fs.readFileSync('./sign_up.html', 'utf8')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  } else if (path === '/sign_up' && method === 'POST') {
    readBody(request).then((body) => {
      let strings = body.split('&')//['email=1','password=2','password_confirmation=3']
      let hash = {}
      strings.forEach((string) => {
        let parts = string.split('=')//['email','1']
        let key = parts[0]
        let value = parts[1]
        hash[key] = decodeURIComponent(value)//hash['email']='1'
      })
      // let emal=hash['email']
      // let password=hash['password']
      // let password_confirmation=hash['password_confirmation']
      let { email, password, password_confirmation } = hash
      if (email.indexOf('@') === -1) {
        response.statusCode=400
        response.setHeader('Content-Type', 'application/json;charset=utf-8')
        response.write(`{
          'errors':{
            'email':'invalid'
          }
        }`)
      }else if(password !== password_confirmation){
        response.statusCode=400
        response.write('password not match')
      }else{
        var users=fs.readFileSync('./db/users','utf8')
        try{
          users=JSON.parse(users)
        }catch(exception){
          users=[]
        }
        users=JSON.parse(users)
        users.push({ email : email , password : password })
        console.log(users)
        var usersString=JSON.stringify(users)
        console.log(usersString)
        fs.writeFileSync('./db/users',users)
        response.statusCode=200
      }
        response.end()
    })
  } else if (path === '/style') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(`
        body{backgound-color: #ddd;}
        h1{color: red}
    `)
    response.end()
  } else if (path === '/main') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(`
    {
      'note':{
        'to':'小谷'
      }

    }
    `)
    response.end()
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`
    {
      'error':'not found'
    }
    `)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})
function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = []
    request.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString()
      resolve(body)
    })
  })
}
server.listen(port)
console.log('监听 ' + port + ' 成功\n请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)
