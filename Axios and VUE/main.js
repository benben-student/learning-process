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