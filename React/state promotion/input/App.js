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
    InputA = (inputValue) => {  //()里面尽量写 inputValue
        this.setState({
            inputValue  //setState的时候直接inputValue
        })
    }
    InputB = (inputValue) => {  ////()里面尽量写 inputValue
        this.setState({
            inputValue  ////setState的时候直接inputValue
        })
    }
    render() {
        return (
            <div>
                <InputA inputValue={this.state.inputValue} InputA={this.InputA} />  {/*一定要传两个,state和方法  */}
                <InputB inputValue={this.state.inputValue} InputB={this.InputB} />
            </div>
        );
    }
}

export default App;
