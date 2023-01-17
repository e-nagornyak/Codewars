function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return([])
    let res = [0, 0]
    input.forEach(e => e > 0 ? res[0]++ : e < 0 ? res[1] = res[1] + e: '')
    return res
}