function calculateYears(principal, interest, tax, desired) {
    let count = 0
    while (principal < desired) {
        console.log(principal)
        const v = principal * interest
        principal += v - v * tax
        count++
    }
    return count
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));