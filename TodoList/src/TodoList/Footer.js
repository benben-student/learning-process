import React from "react";
class Footer extends React.Component {

    render() {
        const { clearAll,actived } = this.props
        const result=actived.filter((item)=>item.isDone===false)
        return (
            <div>
                <button>itemLfet{result.length}</button>
                <button onClick={() => clearAll()}>Clearcompleted</button>
            </div>
        )
    }
}
export default Footer