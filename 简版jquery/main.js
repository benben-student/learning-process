// function getSiblings(node) {
//     var allChildren = node.parentNode.children
//     var array = {
//         length: 0
//     }
//     for (let i = 0; i < allChildren.length; i++) {
//         if (allChildren[i] !== node) {
//             array[array.length] = allChildren[i]
//             array.length += 1
//         }
//     }
//     return array
// }
// function addClass(node, classes) {
//    classes.forEach((value)=>node.classList.add(value))
// }
// addClass(item3, { a: true, b: false, c: true })





// window.ffdom={}
// ffdom.getSiblings=function getSiblings(node) {   /* API */
//         var allChildren = node.parentNode.children
//         var array = {
//             length: 0
//         }
//         for (let i = 0; i < allChildren.length; i++) {
//             if (allChildren[i] !== node) {
//                 array[array.length] = allChildren[i]
//                 array.length += 1
//             }
//         }
//         return array
//     }
// ffdom.addClass= function addClass(node, classes) {
//        classes.forEach((value)=>node.classList.add(value))
//     }
// ffdom.getSiblings(item3)
// ffdom.addClass(item3,['a','b','c'])




Node.prototype.getSiblings = function getSiblings(node) {   /* API */
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
}
Node.prototype.addClass = function addClass(node, classes) {
    classes.forEach((value) => node.classList.add(value))
}
item3.getSiblings(item3)
item3.addClass(item3, ['a', 'b', 'c'])