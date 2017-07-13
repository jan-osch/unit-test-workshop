const { expect } = require('chai')
const { circleArea } = require('./myFile')

describe('myFile', () => {
    describe('circleArea', () => {
        it('should return area of a circle', () => {
            const expected = 2 * 2 * Math.PI
            const actual = circleArea(2)
            expect(actual).to.equal(expected)
        })

        it('should be a function', () => {
            expect(typeof circleArea).to.equal('function')
        })

        it('should throw an error if radius is negative', () => {
            expect(() => circleArea(-10)).to.throw()
        })

        it('should return 0 if radius i 0', () => {
            const expected = 0
            const actual = circleArea(0)
            expect(actual).to.equal(expected)
        })
    })
})
