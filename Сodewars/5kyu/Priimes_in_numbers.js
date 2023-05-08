function primeFactors(n) {
    let res = "", factor = 2;
    while (n > 1) {
        let count = 0;
        while (n % factor === 0) {
            count++;
            n /= factor;
        }
        if (count > 0) {
            res += `(${factor}`;
            if (count > 1) {
                res += `**${count}`;
            }
            res += ")";
        }
        factor++;
    }
    return res;
}