import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'


const ThemedContext=React.createContext('light')
function ThemedButton(props){
    //ThemedButton组件从context接收theme
    return(
        <ThemedContext.Consumer>
            {theme=><Button {...props} theme={theme}/>}
        </ThemedContext.Consumer>
    )
}
//中间组件
function Toolbar(props){
    return(
        <div>
            <ThemedButton/>
        </div>
    )
}
class App3 extends React.Component {
    constructor() {
        super()
        this.state = {
            n: 99
        }
    }
    render() {
        return (
            <ThemedContext.Consumer value='red'>
                <Toolbar/>
            </ThemedContext.Consumer>
        )
    }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App3 />, rootElement)