import React from "react";
class Footer extends React.Component {
    render() {
        const { right,left } = this.props
        const a = left.filter((item) => item.isDone === false)
        return (
            <div>
                <button>left{a.length}</button>
                <button onClick={() => right()}>right</button>
            </div>
        )
    }
}
export default Footer