const { expect } = require('chai')
const { circleArea } = require('./myFile')

describe('myFile', () => {
    describe('circleArea', () => {
        it('should return area of a circle', () => {
            const expected = 2 * 2 * Math.PI
            expect(circleArea(2)).to.equal(expected)
        })

        it('should be a function', () => {
            expect(typeof circleArea).to.equal('function');
        })
    })
})
