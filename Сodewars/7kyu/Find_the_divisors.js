function divisors(integer) {
    let arr = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) arr.push(i)
    }
    return arr.length !== 0 ? arr : `${integer} is prime`
}