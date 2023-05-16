function rowWeights(array) {
    let f = 0, s = 0
    array.forEach((el, i) => {
        if (i % 2) s += el
        if (i % 2 === 0) f += el
    })
    return [f, s]
}
