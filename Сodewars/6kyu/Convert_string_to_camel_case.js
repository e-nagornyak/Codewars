function toCamelCase(str) {
    let newStr = str.replace(/[_-]/g, " ").split(' ')
    return newStr.map((el, i) => !i ? el : el.slice(0, 1).toUpperCase() + el.slice(1, el.length)).join('')
}