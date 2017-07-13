module.exports = function (config) {
    config.set({
        files: [
            { pattern: 'examples/**/*.spec.js', mutated: false, included: true },
            { pattern: 'examples/**/*.js', mutated: true, included: false },
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        reporter: ['clear-text', 'progress'],
    })
}
