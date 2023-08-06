function digPow(n, p) {
    const getDigits = (num) => num.toString().split('').map(Number);
    const totalSum = getDigits(n).reduce((sum, digit, i) => sum + Math.pow(digit, p + i), 0);
    return totalSum % n ? -1 : totalSum / n
}
