function gimme(arr) {
    let newArr = [...arr].sort((a, b) => a - b)
    return arr.indexOf(newArr[1])
}

// const gimme = function (arr) {
//     return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
// };