//1.axios

//html:
//       <!DOCTYPE html>
//       <html lang="en">
//       <head>
//           <meta charset="UTF-8">
//           <meta http-equiv="X-UA-Compatible" content="IE=edge">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Document</title>
//           <link rel="stylesheet" href="./main.js">
//           <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.27.2/axios.min.js"></script>
//           <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
//       </head>
//       <body>
//       <div id="app">
//           <div>
//               书名:《JavaScript高级程序设计》
//               数量:<span id="number">2</span>
//           </div>
//           <div>
//               <button id="addOne">加1</button>
//               <button id="minusOne">减1</button>
//               <button id="reset">归零</button>
//           </div>
//       </div>
//       <script src="./main.js"></script>
//       </body>
//       </html>



//js

axios.interceptors.response.use(function (response) {
    let { config: { url, method, data } } = response
    data = JSON.parse(data || '{}')
    let row = {
        id: 1, name: 'JavaScript高级程序设计', number: 2
    }
    if (url === '/books/1' && method === 'get') {
        response.data = row
    } else if (url === '/books/1' && method === 'put') {
        response.data = Object.assign(row, data)
    }
    return response;
})
axios.get('/books/1')
    .then((response) => {
        console.log(response)
    })
$('#addOne').on('click', function () {
    var oldNumber = $('#number').text()//string
    var newNumber = oldNumber - 0 + 1
    $('#number').text(newNumber)
})
$('#minusOne').on('click', function () {
    var oldNumber = $('#number').text()//string
    var newNumber = oldNumber - 0 - 1
    $('#number').text(newNumber)
})
$('#reset').on('click', function () {
    $('#number').text(0)
})

//2.webpack
//一些操作命令