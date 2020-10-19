// function range(start, end, step = -1) {
//     let newArr = []
//     for(let i = start; i <= end; i ++) {
//         newArr.push(i)
//     }
//     return newArr
// }
// console.log(range(1,10))
// console.log(range(5,2,-1))

// function sum(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sum(range(1,10)))

// Reversing an array
// function reverseArray(arr) {
//     const newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(reverseArray(["A", "B", "C"]));

// Reverse array in place
function reverseArrayInPlace (arr) {
    for (let i = 0; i < arr.length; i++) {
        
    }

}

let arr = [1, 2, 3, 4, 5];
reverseArrayInPlace(arr);
console.log(arr);

exports.reverseArrayInPlace = reverseArrayInPlace