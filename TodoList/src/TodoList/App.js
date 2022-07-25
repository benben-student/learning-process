import React from 'react';
import Header from './Header';
import Input from './Input';
import List from './List';
import Footer from './Footer';
import Style from './Style.css'

let id = 0

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status: ['All']
        };
    }

    addItem = (paramas) => {
        const data = this.state.data
        id++
        data.push({
            id,
            ...paramas
        })
        this.setState({
            data
        })
        console.log(data);
    }
    changeItemStatus = ({ id, isDone }) => {
        const data = this.state.data
        data.forEach((item) => {
            if (item.id === id) {
                item.isDone = !isDone
            }
        })
        this.setState({
            data
        })
    }
    deleteItem = (id) => {
        const data = this.state.data
        const result = data.filter((item) => item.id !== id)
        this.setState({
            data: result
        })
    }
    changeRenderStatus = (status) => {
        console.log(status);
        this.setState({
            status
        })
    }
    deleteAll = () => {
        const data = this.state.data
        const result = data.filter((item) => item.isDone === false)
        this.setState({
            data: result
        })
    }
    render() {
        return (
            <div>
                <Header changeRenderStatus={this.changeRenderStatus} />
                <Input addItem={this.addItem} />
                <List data={this.state.data} deleteItem={this.deleteItem} changeItemStatus={this.changeItemStatus} status={this.state.status} />
                <Footer actived={this.state.data} clearAll={this.deleteAll} />
            </div>
        );
    }
}

export default App;
