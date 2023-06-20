function evenNumbers(arr, n) {
    const filtered = arr.filter(el => !(el % 2))
    return filtered.splice(filtered.length - n, n)
}
