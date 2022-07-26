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
            status:'All'
        };
    }
    changeInput = (value) => {
        const data = this.state.data
        data.push({
            id,
            ...value
        })
        this.setState({
            data
        })
        id++
    }
    deleteValue = (id) => {
        const data = this.state.data
        const newData = data.filter((item) => item.id !== id)
        this.setState({
            data: newData
        })
    }
    changeStatus = ({ id, isDone }) => {
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
    changeRenderStatus=(status)=>{
        this.setState({
            status
        })
        console.log(status);
    }
    changeRight=()=>{
        const data=this.state.data
        const p=data.filter((item)=>item.isDone===false)
        this.setState({
            data:p
        })
    }
    render() {
       
        return (
            <div>
                <Header changeRenderStatus={this.changeRenderStatus}/>
                <Input changeInput={this.changeInput} />
                <List data={this.state.data}
                    deleteValue={this.deleteValue}
                    changeStatus={this.changeStatus} 
                    status={this.state.status}
                    />
                <Footer left={this.state.data}
                        right={this.changeRight}
                />
            </div>
        );
    }
}

export default App;
