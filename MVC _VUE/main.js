fakeData()
let model = {
    data: {
        name: '',
        number: 0,
        id: ''
    },
    fetch(id) {
        return axios.put(`/book/${id}`).then(({ response }) => {
            this.data = response.data
            return response
        })
    },
    update(id, data) {
        return axios.put(`/book/${id}`, data).then((response) => {
            this.data = response.data
            return response
        })
    }
}
let view = {
    el: '#app',
    template: `《__name__》
            <div>
            书名:《JavaScript高级程序设计》
            数量:<span id="number">2</span>
        /div>
        div>
            <button id="addOne">加1</button>
            <button id="minusOne">减1</button>
            <button id="reset">归零</button>
        /div>
        `,
    render(data) {
        let html = this.template.replace('__name__', data.name)
            .replace('__number__', data, number)
        $(this.el).html(html)
    }
}
var controller = {
    init(options) {
        this.view = options.view
        this.model = options.model
        this.view = view
        this.model = model
        this.view.render(this.model.data)
        this.bindEvents()
        this.model.fetch(1)
            .then(() => {
                this.view.render(this.model.data)
            })
    },
    bindEvents() {
        $(this.view.el).on('click', '#addOne', function () {
            var oldNumber = $('#number').text()//string
            var newNumber = oldNumber - 0 + 1
            model.update({ number: newNumber }).then(() => {
                view.render(model.data)
            })
        })

        $(this.view.el).on('click', '#minusOne', function () {
            var oldNumber = $('#number').text()//string
            var newNumber = oldNumber - 0 - 1
            model.update({ number: newNumber }).then(() => {
                view.render(model.data)
            })
        })

        $(this.view.el).on('click', '#reset', function () {
            model.update({ number: newNumber }).then(() => {
                view.render(model.data)
            })
        })
    }
}
model.fetch(1)
    .then(({ data }) => {
        view.render(model.data)
    })


function fakeData() {
    let book = {
        name: 'JavaScript高级程序设计',
        number: 2,
        id: 1
    }
    axios.interceptors.response.use(function (response) {
        let { config: { method, url, data } } = response
        if (url === '/books/1' && method === 'get') {
            response.data = book
        } else if (url === '/book/1' && method === 'put') {
            Object.assign(book, data)
            response.data = book
        }
        return response;
    })
}