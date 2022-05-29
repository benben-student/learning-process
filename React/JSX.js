let number = 0


let onClickButton = () => {
    number += 1
    render()
}
let onClickButton2 = () => {
    number -= 1
    render()
}
render()
function render() {
   ReactDOM.render(
       <div className='parent'>
           <span className='red'>{number}</span>
           <button onClick={onClickButton}>+</button>
           <button onClick={onClickButton2}>-</button>
       </div>,
      document.querySelector('#root'))
}