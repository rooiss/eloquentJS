const { arrayToList, listToArray } = require("./arrayToList")


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
describe('listToArray',() => {
    it('creates an array from a list' ,() => {
        const node = {
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
        }
        const answer = listToArray(node)
        expect(answer).toEqual([1,2,3,4])
    })
})
