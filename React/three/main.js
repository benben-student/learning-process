class App extends React.Component{
    changeMessage(){
        this.setState({
            message:'真好'
        })
    }
    constructor(){
        super()
        this.state={
           message:'你好'
        }
    }
    render(){
        return(
            <div>hi
                <Foo message={this.state.message}
                fn={this.changeMessage.bind(this)}/>
            </div>
        )
    }
}
function Foo(props){
    return(
        <p>得到的message是{props.message}
            <button onClick={props.fn}>click</button>
        </p>
    )
}
ReactDOM.render(<App/>,document.querySelector("#root"))