let createStore = Redux.createStore
let reducers = (state, action) => {
    state = state || {
        money: { amount: 10000 }
    }
    switch (action.type) {
        case '我想花钱':
            return{
                money:{
                    amount:state.money.amount-action.payload
                }
            }
        default:
            return state
    }
}
const store = createStore(reducers)



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



// eventHub.on('我要用钱',function fn1(){})
// eventHub.trigger('我要用钱',100)


// button.on('click',function(data){data==='x'})//订阅     click事件名称
// button.trigger('click','x')//发布    click事件名称


class App extends React.Component {
    constructor() {
        super()
      
    }
    render() {
        return (
            <div className="root">
                <BigPapa money={this.props.store.money} />
                <YoungPapa money={this.props.store.money} />
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

        // //action
        // eventHub.trigger('我想花钱' /*action type*/ , 100)//payload

        store.dispatch({ type: '我想花钱', payload: 100 })

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
    ReactDOM.render(<App store={store.getState()}/>, document.querySelector("#root"))
}
render()
store.subscribe(function(){
    render()
})
