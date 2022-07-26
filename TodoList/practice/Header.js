import React from "react";
class Header extends React.Component {
        constructor(props){
            super(props)
            this.state={
                list:[
                    'All',
                    'Actived',
                    'Completed'
                ],
                indexs:[]
            }
        }
        changestatus=(index,item)=>{
            const {changeRenderStatus}=this.props
            this.setState({
                indexs:index
            })
            changeRenderStatus(item)
        }
    render() {
            const {list,indexs}=this.state
        return (
            <div>
                {list.map((item,index)=>{
                    return<button onClick={()=>this.changestatus(index,item)} className={indexs===index?'menu':''} key={index}>{item}</button>
                })}
            </div>
        )
    }
}
export default Header