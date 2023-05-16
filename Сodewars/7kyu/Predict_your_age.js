function predictAge(...arg) {
    return Math.floor(Math.sqrt([...arg].reduce((a, b) => a + b ** 2, 0)) / 2)
}
