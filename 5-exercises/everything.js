// implement every as a function that takes an array and a predicate function as parameters
// one using a loop and another using the some method

// looping
function every(array, test) {
  for (let i = 0; i < array.length; i++) {
    if (test(array[i]) === false) {
      return false
    }
  }
  return true
}

// using some
function every(array, test) {
  if (array.some(test) === true) {
    return true
  }
  return false
}

console.log(every([1, 3, 5], (n) => n < 10))
// → true
console.log(every([2, 4, 16], (n) => n < 10))
// → false
console.log(every([], (n) => n < 10))
// → true
