const { expect, it } = require("@jest/globals")
const { reverseArrayInPlace } = require("./exercises")

describe('reverseArrayInPlace',() => {
    it('reverses an array in place for even-numbered arrays' ,() => {
        const arr = [1,2,3,4]
        reverseArrayInPlace(arr)
        expect(arr).toEqual([4,3,2,1])
    })
    it('reverses an array in place for odd-numbered arrays' ,() => {
        const arr = [1,2,3,4,5]
        reverseArrayInPlace(arr)
        expect(arr).toEqual([5,4,3,2,1])
    })

})