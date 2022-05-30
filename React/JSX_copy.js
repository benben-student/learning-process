function App(props) {
    return (
        <div>
            app{props.name}
        </div>
    )
}
class App2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }
    add() {
        this.setState({
            number: this.state.number + 1
        })
    }
    render() {
        return (
            <div>
                app 2{this.props.name}
                <div>
                    {this.state.number}
                    <button onClick={this.add.bind(this)}>+</button>
                </div>
            </div>
        )
    }
}


render()


function render() {
    ReactDOM.render(
        <App2 />,
        document.querySelector('#root'))
}