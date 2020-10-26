function arrayToList (arr) {
    let nextNode = null
    arr.reverse().forEach((el) => {
        nextNode = {
            value: el,
            rest: nextNode
        }
    })
    return nextNode
}
function prepend(el, node) {
    return {
        value: el,
        rest: node
    }
}

function nth(node, num) {
    if (num === 0) {
        return node.value
    } 
    return nth(node.rest, num - 1)
}

function listToArray(node) {

}

exports.arrayToList = arrayToList
exports.listToArray = listToArray