function findOutlier(integers) {
    let a = integers.filter(el => el % 2 !== 0)
    let b = integers.filter(el => el % 2 === 0)
    if (a.length === 1) {
        return a[0]
    } else {
        return b[0]
    }
}


let a = [2, 2, 2, 1, 2, 4]
findOutlier(a)