// function range(start, end, step = -1) {
//     let newArr = []
//     for(let i = start; i <= end; i ++) {
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(range(1,10))
// console.log(range(5,2,-1))

const { number } = require("yargs");

// function sum(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sum(range(1,10)))

// Reversing an array
function reverseArray(arr) {
    const newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}

// Reverse array in place
function reverseArrayInPlace (arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let lastIndex = arr.length - 1 - i
        let temp = arr[i]
        arr[i] = arr[lastIndex]
        arr[lastIndex] = temp
    }
}

exports.reverseArrayInPlace = reverseArrayInPlace
