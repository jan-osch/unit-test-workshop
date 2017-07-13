const { PI } = Math

exports.circleArea = (radius) => {
    if (radius < 0) {
        throw new Error('Radius should be a non-negative integer, got:', radius)
    }

    return PI * (radius ** 2)
}

exports.circleCircumference = (radius) => {
    if (radius < 0) {
        throw new Error('Radius should be a non-negative integer, got:', radius)
    }

    return 2 * PI * radius
}
