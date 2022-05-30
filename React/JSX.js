function App() {
    return (
        <div>
            <Box1 name='加一' />
            <Box2 name='加二' />
        </div>
    )
}
function Box1(obj) {
    let number1 = 0
    let add1 = () => {
        number1 += 1
        render()
    }
    let minus1 = () => {
        number1 -= 1
        render()
    }
    return (
        <div className='red'>
            我的 name 是 {obj.name}
            <hr />
            <span>{number1}</span>
            <button onClick={add1}>+</button>
            <button onClick={minus1}>-</button>
        </div>
    )
}
function Box2(obj) {
    let number2 = 0
    let add2 = () => {
        number2 += 2
        render()
    }
    let minus2 = () => {
        number2 -= 2
        render()
    }
    return (
        <div className='red'>
            我的 name 是 {obj.name}
            <hr />
            <span>{number2}</span>
            <button onClick={add2}>+</button>
            <button onClick={minus2}>-</button>
        </div>
    )
}
render()
function render() {
    ReactDOM.render(
        <App />,
        document.querySelector('#root'))
}