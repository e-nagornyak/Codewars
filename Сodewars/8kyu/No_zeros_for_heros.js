function noBoringZeros(n) {
    return +`${n}`.replace(/0+$/g, '')
}

console.log(noBoringZeros(145));