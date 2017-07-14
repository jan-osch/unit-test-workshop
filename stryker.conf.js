module.exports = (config) => {
    config.set({
        files: [
            { pattern: 'examples/simple/myFile.spec.js', mutated: false, included: true },
            { pattern: 'examples/simple/myFile.js', mutated: true, included: false },
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        reporter: ['clear-text', 'progress'],
    })
}
