function App(props){
    return(
        <div>
            <Box1 name='frank'/>
            <Box2 name='jack'/>
        </div>
    )
}
class Box1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }
    add(){
        this.setState({
            number:this.state.number+1
        })
    }
    minus(){
        this.setState({
            number:this.state.number-1
        })
    }
    render(){
        return(
            <div className='red'>
                <span>{this.state.number}</span>
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.minus.bind(this)}>-</button>
                {this.props.name}
            </div>
        )
    }
}
class Box2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }
    add(){
         this.setState({
             number:this.state.number+2
         })
    }
    minus(){
        this.setState({
            number:this.state.number-2
        })
    }
    render(){
        return(
            <div className='red'>
                <span>{this.state.number}</span>
                <button onClick={this.add.bind(this)}>+2</button>
                <button onClick={this.minus.bind(this)}>-2</button>
                {this.props.name}
            </div>
        )
    }
}
render()
function render(){
    ReactDOM.render(
        <App/>,   //React.createElement(App)
        document.querySelector('#root')
    )
}