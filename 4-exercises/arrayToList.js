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

exports.arrayToList = arrayToList