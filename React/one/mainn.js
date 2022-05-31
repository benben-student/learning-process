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
    let span = React.createElement('span', { className: 'red' }, number)
    let button = React.createElement('button', { onClick: onClickButton }, '+')
    let button2 = React.createElement('button', { onClick: onClickButton2 }, '-')
    let div = React.createElement(
        'div', { className: 'parent' }, span, button, button2
    )
    ReactDom.render(div, document.querySelector('#root'))
}