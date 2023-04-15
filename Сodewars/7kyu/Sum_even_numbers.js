function sumEvenNumbers(input) {
    return input.reduce((a, b) => b % 2 === 0 ? a + b : a + 0, 0)
}
