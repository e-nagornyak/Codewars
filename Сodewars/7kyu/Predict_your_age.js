function predictAge(...arg) {
    return Math.floor(Math.sqrt([...arg].reduce((a, b) => a + b ** 2, 0)) / 2)
}

//const predictAge = (...args) =>
//   Math.hypot(...args) >> 1;
