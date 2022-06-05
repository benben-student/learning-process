import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
function F1(props) {
    return
    <div>1111,{props.n1}
        <F2 n2={props.n1}></F2>
    </div>

}
function F2(props) {
    return
    <div>2222,{props.n2}
        <F3 n3={props.n2}></F3>
    </div>
}
function F3(props) {
    return
    <div>3333,{props.n3}
        <F4 n4={props.n3}></F4>
    </div>
}
function F4() {
    return
    <div>
        4444,{props.n4}
    </div>

}
class App1 extends React.Component {
    constructor() {
        super()
        this.state = {
            n: 99
        }
    }
    render() {
        return (
            <div>
                <F1 n1={this.state.n}></F1>
            </div>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App1 />, rootElement)