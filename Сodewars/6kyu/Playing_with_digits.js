function digPow(n, p) {
    const totalSum = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
    return totalSum % n ? -1 : totalSum / n
}
