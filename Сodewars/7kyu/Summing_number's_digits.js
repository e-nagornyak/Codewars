function sumDigits(number) {
    return Number(String(Math.abs(number)).split('').reduce((a,b) => +a + +b))
}