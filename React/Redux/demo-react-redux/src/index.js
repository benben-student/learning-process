import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

// class App2 extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     add=()=>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <div>{this.state.count}</div>
//                 <div>
//                     <button onClick={this.add}>+1</button>
//                 </div>
//             </div>
//         )
//     }
// }



function App() {
    const [count/*值*/, setCount/*更新函数*/] = useState(0)
    const [user, setUser] = useState(
        {
            name: 'frank', age: 18,
            hobbies: ['LOL', 'Dog', 'code']
        })
    const add = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    const old = () => {
        setUser({
            ...user,
            age: user.age + 1
        })
    }
    const addHobby = () => {
        user.hobbies.splice(1, 1)
        setUser({
            ...user,
            hobbies: user.hobbies
        })
    }
    return (
        <div>
            <div>{count}</div>
            <div>
                <div>
                    <button onClick={add}>+1</button>
                    <button onClick={minus}>-1</button>
                </div>
            </div>
            <div>
                {user.name},{user.age},<br />{user.hobbies.join(',')}
            </div>
            <div>
                <button onClick={old}>+1</button>
                <button onClick={addHobby}>增加爱好</button>
            </div>
        </div>
    )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
