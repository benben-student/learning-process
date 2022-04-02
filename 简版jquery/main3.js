window.jQuery = function (nodeOrSelector) {
    let node
    if (typeof nodeOrSelector === 'string') {
        node = document.querySelector(nodeOrSelector)
    } else {
        node = nodeOrSelector
    }
    return {
        getSibling: function () {
            var allChildren = node.parentNode.children
            var array = {
                length: 0
            }
            for (let i = 0; i < allChildren.length; i++) {
                if (allChildren[i] !== node) {
                    array[array.length] = allChildren[i]
                    array.length += 1
                }
            }
            return array
        },
        addClass: function (classes) {
            classes.forEach((value) => node.classList.add(value))
        }
    }
}
//var node2=jQuery("#item3")
var node2 = jQuery("ul > li:nth-child(3)")

node2.getSibling()

//node2.addClass(['red','b','c'])
node2.addClass(['blue', 'b', 'c'])