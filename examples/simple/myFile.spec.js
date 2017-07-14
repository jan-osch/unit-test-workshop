const { expect } = require('chai')
const { circleArea, circleCircumference, prepareExcelData } = require('./myFile')

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

        it('should return 0 if radius is 0', () => {
            const expected = 0
            const actual = circleArea(0)
            expect(actual).to.equal(expected)
        })
    })

    describe('circleCircumference', () => {
        it('should return area of a circle', () => {
            const expected = 2 * 4 * Math.PI
            const actual = circleCircumference(4)
            expect(actual).to.equal(expected)
        })

        it('should return area of a circle', () => {
            const actual = typeof circleCircumference
            const expected = 'function'
            expect(actual).to.equal(expected)
        })

        it('should return 0 if radius is 0', () => {
            const expected = 0
            const actual = circleCircumference(0)
            expect(actual).to.equal(expected)
        })

        it('should throw an error if radius is negative', () => {
            expect(() => circleCircumference(-1)).to.throw()
        })
    })

    describe('prepareExcelData', () => {
        it('should return an empty header', () => {
            const actual = prepareExcelData({}, 'metric')
            const expected = []
            expect(actual).to.deep.equal(expected)
        })

        it('should work for single non empty series with name and data', () => {
            const data = {
                series: [
                    {
                        name: 'my series',
                        data: [{ metric: 1 }, { metric: 2 }],
                    },
                ],
            }

            const actual = prepareExcelData(data, 'metric')
            const expected = [['my series', 1, 2]]
            expect(actual).to.deep.equal(expected)
        })

        it('should create a name for series if it is absent', () => {
            const data = {
                series: [
                    {
                        data: [{ metric: 1 }, { metric: 2 }],
                    },
                ],
            }

            const actual = prepareExcelData(data, 'metric')
            const expected = [['Series 1', 1, 2]]
            expect(actual).to.deep.equal(expected)
        })

        it('should return arrays for multiple series', () => {
            const data = {
                series: [
                    {
                        name: 'a',
                        data: [{ metric: 1 }],
                    },
                    {
                        data: [{ metric: 2 }],
                    },
                ],
            }

            const actual = prepareExcelData(data, 'metric')
            const expected = [['a', 1], ['Series 2', 2]]
            expect(actual).to.deep.equal(expected)
        })

        it('should return an empty string for absent metric points', () => {
            const data = {
                series: [
                    {
                        name: 'a',
                        data: [{ metric: 1 }, {}, { wrong: 'name' }],
                    },
                ],
            }

            const actual = prepareExcelData(data, 'metric')
            const expected = [['a', 1, '', '']]
            expect(actual).to.deep.equal(expected)
        })

        xit('should change explicit null and undefined values of to empty strings', () => {
            const data = {
                series: [
                    {
                        name: 'a',
                        data: [{ metric: 1 }, { metric: null }, { metric: undefined }],
                    },
                ],
            }

            const actual = prepareExcelData(data, 'metric')
            const expected = [['a', 1, '', '']]
            expect(actual).to.deep.equal(expected)
        })
    })
})
