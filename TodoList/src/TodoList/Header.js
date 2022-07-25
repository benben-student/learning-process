import React from "react";
class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                'All',
                'Actived',
                'Completed'
            ],
            indexs: []
        }
    }
    changeRenderStatus(index, item) {
        this.setState({
            indexs: index
        })
        const { changeRenderStatus } = this.props
        changeRenderStatus(item)
    }
    render() {
        const { data, indexs } = this.state
        return (
            <div>
                {data.map((item, index) => {
                    return <button className={indexs === index ? 'menu' : ''} onClick={this.changeRenderStatus.bind(this, index, item)} key={index}>{item}</button>
                })}
            </div>
        )
    }
}
export default Header