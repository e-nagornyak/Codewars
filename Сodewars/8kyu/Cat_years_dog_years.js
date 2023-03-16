var humanYearsCatYearsDogYears = function (humanYears) {
    let arr = [humanYears, 0, 0]
    for (let i = 0; i < humanYears; i++) {
        if (i === 0) {
            arr[1] += 15
            arr[2] += 15
        } else if (i === 1) {
            arr[1] += 9
            arr[2] += 9
        } else {
            arr[1] += 4
            arr[2] += 5
        }
    }
    return arr
}
console.log(humanYearsCatYearsDogYears(1));

// other solution
var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
}