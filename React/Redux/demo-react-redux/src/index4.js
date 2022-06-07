import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
function F1(props) {
    return'F1'
}
function Ccc(props){
    let x=100
    let result=props.children()
    return(
        <div className='border'>3333
           <nContext.Consumer>
               {(x)=><F4 n4={x.n}/>}
           </nContext.Consumer>
        </div>
    )
}
function F4(props){
    return <div className='bordered'>4444,{props.n4}</div>
}
const nContext=React.createContext()
class App4 extends  React.Component{
    constructor(){
        super()
        this.state={
            n:67
        }
        setTimeout(()=>{
             this.setState({
                 n:99
             })
        })
    }
    render(){
        let value={}
        value.n=this.state.n
        value.setN=(value)=>{
            this.setState({
                n:value
            })
        }
    return(
        // <Consumer>
        //     {(n)=>{console.log(n)}}
        // </Consumer>

        // <div>
        //     <F1/>
        // </div>

        //  <Ccc c1='c1'>{F1}</Ccc>

        // <Consumer>
        //     {(n)=><div>{n}</div>}
        // </Consumer>

        <nContext.Provider value={this.state.n}>
             <F1/>
        </nContext.Provider>
    )
}}
const rootElement = document.getElementById('root')
ReactDOM.render(<App4 />, rootElement)