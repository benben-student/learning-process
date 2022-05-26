let number = 0
let span = React.createElement('span', { className: 'red' }, number)
ReactDom.render(span, document.querySelector('#root'))
let add = document.querySelector('#add')
add.onclick = () => {
    number += 1
    let span = React.createElement('span', { className: 'red' }, number)
    ReactDom.render(span, document.querySelector('#root'))
}