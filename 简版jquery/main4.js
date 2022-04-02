window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    if (typeof nodeOrSelector === 'string') {
        let temp = document.querySelectorAll(nodeOrSelector)// 伪数组
        for (let i = 0; i < temp.length; i++) {
            nodes[i] = temp[i]
        }
        nodes.length = temp.length
    } else if (nodeOrSelector instanceof Node) {
        nodes = {
            0: nodeOrSelector,
            length: 1
        }
    }
    nodes.addClass = function (classes) {
        classes.forEach((value) => {
            for(let i=0;i<nodes.length;i++){
                nodes[i].classList.add(value)
            }
        })
    }
    nodes.getText=function(){
        var texts=[]
        for(let i=0;i<nodes.length;i++){
          texts.push(nodes[i].textContent)
        }
        return texts
    }
    nodes.setText=function(text){
        for(let i=0;i<nodes.length;i++){
            nodes[i].textContent=text
        }
    }
    nodes.text=function(text){
        if(text===undefined){
          var texts=[]
          for(let i=0;i<nodes.length;i++){
             texts.push(nodes[i].textContent)
          }
          return texts
        }else{
            for(let i=0;i<nodes.length;i++){
                nodes[i].textContent=text
            }
        }
    }
    return nodes
}
var node2 = jQuery('ul >li')
node2.addClass(['blue'])
var text=node2.text()
node2.text('hi')
console.log(text)
console.log(node2)