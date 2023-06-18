function multipleOfIndex(array) {
    return array.filter((x,i) => x === 0 || x % i === 0)
}
