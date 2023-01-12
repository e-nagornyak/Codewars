function digitalRoot(n) {
    let res
    if (n < 10) {
        return n
    } else {
        res = n.toString().split('').reduce((a, b) => +a + +b)
    }
    return digitalRoot(res)
}

// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
// }

