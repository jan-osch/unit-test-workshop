const { get, each } = require('lodash')

const { PI, pow } = Math

exports.circleArea = (radius) => {
    if (radius < 0) {
        throw new Error('Radius should be a non-negative integer, got:', radius)
    }

    return PI * pow(radius, 2)
}

exports.circleCircumference = (radius) => {
    if (radius < 0) {
        throw new Error('Radius should be a non-negative integer, got:', radius)
    }

    return 2 * PI * radius
}

exports.prepareExcelData = (data, metricKey) => {
    const series = get(data, 'series', [])
    const body = []

    each(series, (serie, i) => {
        const row = [get(serie, 'name', `Series ${i + 1}`)]

        each(get(serie, 'data', []), (brand) => {
            row.push(get(brand, metricKey, ''))
        })

        body.push(row)
    })

    return body
}
