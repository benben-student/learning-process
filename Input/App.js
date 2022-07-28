import React from 'react';
import InputA from './InputA';
import InputB from './InputB';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    changeInputA = (item) => {
        this.setState({
            inputValue: item
        })
    }
    render() {
        return (
            <div>
                <InputA changeInputA={this.changeInputA} />
                <InputB inputValue={this.state.inputValue} />
            </div>
        );
    }
}

export default App;
