﻿//数据
var money = {
    amount: 1000000
}
var user = {
    id: 123123,
    nickname: '土豪'
}
var store = {
    money: money,
    user: user
}


//eventHub
var fnLists = {}
var eventHub = {
    trigger(eventName, data) {
        let fnList = fnLists[eventName]
        if (!fnList) { return }
        for (let i = 0; i < fnList.length; i++) {
            fnList[i](data)
        }
    },
    on(eventName, fn) {
        if (!fnLists[eventName]) {
            fnLists[eventName] = []
        }
        fnLists[eventName].push(fn)
    }
}
var x = {
    init() {
        eventHub.on('我想花钱', function (data) {
            store.money.amount -= data
            render()
        })
    }
}
x.init()



// eventHub.on('我要用钱',function fn1(){})
// eventHub.trigger('我要用钱',100)


// button.on('click',function(data){data==='x'})//订阅     click事件名称
// button.trigger('click','x')//发布    click事件名称


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            store:store
        }
    }
    render() {
        return (
            <div className="root">
                <BigPapa money={this.state.store.money} />
                <YoungPapa money={this.state.store.money} />
            </div>
        )
    }
}
class BigPapa extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="papa">大爸{this.props.money.amount}
                <Son1 money={this.props.money} />
                <Son2 money={this.props.money} />
            </div>
        )
    }

}
class YoungPapa extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="papa">二爸{this.props.money.amount}
                <Son3 money={this.props.money} />
                <Son4 money={this.props.money} />
            </div>
        )
    }

}
class Son1 extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="son">1儿子{this.props.money.amount}</div>
        )
    }

}
class Son2 extends React.Component {
    constructor() {
        super()

    }
    x() {
        eventHub.trigger('我想花钱', 100)

    }
    render() {
        return (
            <div className="son">2儿子{this.props.money.amount}
                <button onClick={() => this.x()}>消费</button>
            </div>
        )
    }

}
class Son3 extends React.Component {
    constructor() {
        super()


    }
    render() {
        return (
            <div className="son">3儿子{this.props.money.amount}</div>
        )
    }

}
class Son4 extends React.Component {
    constructor() {
        super()

    }
    render() {
        return (
            <div className="son">4儿子{this.props.money.amount}</div>
        )
    }

}
function render() {
    ReactDOM.render(<App />, document.querySelector("#root"))
}
render()