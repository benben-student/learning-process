import React from "react";
class List extends React.Component {
    render() {
        const { data, deleteItem, changeItemStatus, status } = this.props
        let newData;
        if (status !== 'All') {
            newData = data.filter((item) => status === 'Completed' ? item.isDone : !item.isDone)
        } else {
            newData = data
        }
        return (
            <div>
                {
                    newData.map((item) => {
                        const { id, value, isDone } = item
                        return (
                            <div>
                                <button onClick={() => changeItemStatus({ id, isDone })} style={{ color: `${isDone ? 'blue' : 'red'}` }}>完成</button>
                                <span onClick={() => changeItemStatus({ id, isDone })} style={{ color: `${isDone ? 'blue' : 'red'}` }} key={id}>{value}</span>
                                <button onClick={() => deleteItem(id)}>delete</button>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
}
export default List