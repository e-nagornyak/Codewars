function digPow(n, p) {
    const getDigits = (num) => num.toString().split('').map(Number)
    const digits = getDigits(n);
    const totalSum = digits.reduce((a, b, i) => sum + Math.pow(b, p + i), 0);
    return
    if (totalSum % n === 0) {
        return totalSum / n;
    } else {
        return -1;
    }
}
