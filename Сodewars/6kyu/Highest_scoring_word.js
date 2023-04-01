function high(x) {
    let arr = x.split(' ')
    let sum = arr.map(el => el.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0))
    let index = sum.indexOf(Math.max.apply(null, sum))
    return arr[index]
}