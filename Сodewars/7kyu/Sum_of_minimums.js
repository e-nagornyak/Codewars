function sumOfMinimums(arr) {
    return arr.reduce((a, b) => a + b.sort((a, b) => a - b)[0], 0)
}
