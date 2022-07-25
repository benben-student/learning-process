import React from "react";
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })

    }
    addItem() {
        const { addItem } = this.props
        const { inputValue } = this.state
        console.log(inputValue);
        if (inputValue.trim()) {
            addItem({
                value: inputValue.trim(),
                isDone: false,
            });
            this.setState({
                inputValue: '',
            });
        }


    }
    render() {
        return (
            <div>
                <input value={this.state.inputValue} onChange={this.onChange} />
                <button onClick={this.addItem.bind(this)}>add</button>
            </div>
        )
    }
}
export default Input