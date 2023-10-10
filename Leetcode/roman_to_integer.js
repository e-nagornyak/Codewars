function romanToInt(s) {
    const variants = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = s[i];
        const currentValue = variants[current];

        if (currentValue < prevValue) {
            res -= currentValue;
        } else {
            res += currentValue;
        }

        prevValue = currentValue;
    }

    return res;
}
