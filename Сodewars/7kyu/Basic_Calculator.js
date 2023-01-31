function calculate(num1, operation, num2) {
    if (operation === '+') {
        return num1 + num2
    } else if (operation === '-') {
        return num1 - num2
    } else if (operation === '*') {
        return num1 * num2
    } else if (operation === '/') {
        if (num1 !== 0 && num2 !== 0) {
            return num1 / num2
        } else return null
    } else {
        return null
    }
}