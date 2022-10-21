function gimme(arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    return arr.indexOf(newArr[1])
}