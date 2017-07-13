const { PI } = Math

exports.circleArea = radius => PI * (radius ** 2)

exports.circleCircumference = (radius) => {
    if (radius < 0) {
        throw new Error('Radius should be a non-negative integer, got:', radius)
    }

    console.log('happy team')

    return 2 * PI * radius
}
