import React from "react";
class InputB extends React.Component {
    onChange = (e) => {
        this.props.InputB(e.target.value) //把const {InputB}=this.props 
        //   InputB(e.target.value)改为左边的写法
    }
    render() {
        const inputValue = this.props.inputValue  //左边不要加{},右边一定要 .inputValue
        return (
            <div>
                <p>B</p><input value={inputValue} onChange={this.onChange} />
            </div>
        )
    }
}
export default InputB