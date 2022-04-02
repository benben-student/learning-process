window.node2 = function (node) {
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
var node2 = Node2(item3)
node2.getSibling()
node2.addClass(['a', 'b', 'c'])