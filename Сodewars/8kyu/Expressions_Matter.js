function expressionMatter(a, b, c) {
    const values = [
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c
    ];
    return Math.max(...values);
}

