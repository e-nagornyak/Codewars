multiplicationTable = function (size) {
    let arr = [], res = []
    for (let i = 1; i <= size; i++) {
        arr.push(i)
    }

    for (let i = 1; i <= size; i++) {
        res.push(arr.map(el => el * i))
    }
    return res
}