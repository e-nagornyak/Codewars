function gap(g, m, n) {
    let prevPrime = null;

    const isPrime = (num) =>  {
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let num = m; num <= n; num++) {
        if (isPrime(num)) {
            if (prevPrime !== null && num - prevPrime === g) return [prevPrime, num];
            prevPrime = num;
        }
    }

    return null;
}
