import React from "react";
class List extends React.Component {
    render() {
        const { data, deleteValue, changeStatus, status } = this.props
        let newResult;
        if (status !== 'All') {
            newResult = data.filter((item) => status === 'Completed' ? item.isDone : !item.isDone)
        } else {
            newResult = data
        }

        return (
            <div>
                {
                    newResult.map((item) => {
                        const { value, id, isDone } = item
                        return (<div>
                            <button onClick={() => changeStatus({ id, isDone })}>完成</button>
                            <span style={{ color: `${isDone ? '#ccc' : '#000'}` }} onClick={() => changeStatus({ id, isDone })} key={id}>{value}</span>
                            <button onClick={() => deleteValue(id)}>delete</button>
                        </div>)
                    })
                }
            </div >
        )
    }
}
export default List