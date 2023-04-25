function arrayDiff(a, b) {
    return a.filter(f => !b.some(s => s === f))
}