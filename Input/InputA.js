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
        const { changeInputA } = this.props
        changeInputA(e.target.value)
    }
    render() {
        const { inputValue } = this.state
        return (
            <div>
                <p>A</p><input value={inputValue} onChange={this.onChange} /><br />
            </div>
        )
    }
}
export default Input