const { arrayToList } = require("./arrayToList")

describe('arrayToList',() => {
    it('creates a linked list from an array' ,() => {
        const arr = [1,2,3,4]
        const answer = arrayToList(arr)
        expect(answer).toEqual({
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: {
                        value: 4,
                        rest: null
                    }
                }
            }
        })
    })
})