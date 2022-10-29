const number = function (array) {
    return array.length === 0 ? [] : array.map((e, index) => `${index + 1}: ${e}`)
}


number(['a', 'b', 'c'])