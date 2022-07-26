import React from "react";
class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }
    onChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleClick = () => {
        const { inputValue } = this.state
        const { changeInput } = this.props
        if (inputValue.trim()) {
            changeInput({
                value: inputValue.trim(),
                isDone: false
            })
            this.setState({
                inputValue: ''
            })
        }
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <input value={inputValue} onChange={this.onChange.bind(this)} />
                <button onClick={() => this.handleClick()}>add</button>
            </div>
        )
    }
}
export default Input