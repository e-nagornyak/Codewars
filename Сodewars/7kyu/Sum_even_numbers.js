function sumEvenNumbers(input) {
    return input.reduce((a, b) => a + (b % 2 ? 0 : b), 0)
}
