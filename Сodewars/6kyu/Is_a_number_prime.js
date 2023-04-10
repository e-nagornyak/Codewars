function isPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}