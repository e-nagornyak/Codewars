function roundToNext5(n) {
    if (n % 5 === 0) {
        console.log(n)
    } else {
        for (; n % 5 !== 0; n++) {}
        console.log(n)
    }
}

roundToNext5(-5)