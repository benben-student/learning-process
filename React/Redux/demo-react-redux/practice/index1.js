import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
function F1(props) {
    return
    <div className='bordered'>1111,{props.n1}
        <F2 n2={props.n1}></F2>
    </div>

}
function F2(props) {
    return
    <div className='bordered'>2222,{props.n2}
        <F3 n3={props.n2}></F3>
    </div>
}
function F3(props) {
    return
    <div className='bordered'>3333
        <nContext.Consumer>
            {(n) => <F4 n4={x.n} setN={x.setN}/>}
        </nContext.Consumer>
    </div>
}
function F4(props) {
    return
    <div className='bordered'>
            4444,{props.n4}
            <button onClick={props.setN()}>Click me</button>
    </div>

}
const nContext = React.createContext(100)

class App1 extends React.Component {
    constructor() {
        super()
        this.state = {
           x:{
               n:67,
               setN:()=>{
                   this.setState(
                       {x:{n:Math.random()}}
                   )
               }
           }
        }
    }
    render() {
        return (
            <div>
                <nContext.Provider value={value}>
                   <F1/>
                </nContext.Provider>
            </div>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App1 />, rootElement)