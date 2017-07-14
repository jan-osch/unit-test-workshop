const { expect } = require('chai')
const sinon = require('sinon')
const rewire = require('rewire')

const myModule = rewire('./getFiles')

describe('getFiles', () => {
    it('should return number of js files ', (done) => {
        const fileList = [
            'file.js',
            'file.spec.js',
            'package.json',
        ]
        const mockFs = {
            readdir: sinon.stub().yieldsAsync(null, fileList),
        }
        myModule.__set__('fs', mockFs) // eslint-disable-line no-underscore-dangle
        const expected = 2

        myModule.getAllJsFiles('current_dir', (err, actualNumberOfFiles) => {
            expect(actualNumberOfFiles).to.equal(expected)
            done()
        })
    })
})
