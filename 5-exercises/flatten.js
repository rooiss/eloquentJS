// take this array and flatten it using reduce and concat
let arr = [[1, 2, 3], [4, 5], [6]]
// making callback function for reduce
const reducer = (total, currentVal) => total.concat(currentVal)
console.log(arr.reduce(reducer))
// using concat is expensive, creates new array, not ideal for large arrays
