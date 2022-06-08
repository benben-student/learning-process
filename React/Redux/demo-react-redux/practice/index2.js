import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

function Button(){
    return <button>in</button>
}
function ThemedButton(props){
    return<Button theme={props.theme}></Button>
}
//中间组件
function Toolbar(props){
    //Toolbar 组件必须加一个额外的theme属性
    //然后传递它给themedButton组件
    return(
        <div>
            <ThemedButton theme={props.theme}/>
        </div>
    )
}




class App2 extends React.Component {
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
ReactDOM.render(<App2 />, rootElement)