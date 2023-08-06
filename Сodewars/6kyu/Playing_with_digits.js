function digPow(n, p) {
    function getDigits(num) {
        return num.toString().split('').map(Number);
    }

    const digits = getDigits(n);
    const totalSum = digits.reduce((sum, digit, index) => sum + Math.pow(digit, p + index), 0);

    if (totalSum % n === 0) {
        return totalSum / n;
    } else {
        return -1;
    }
}
