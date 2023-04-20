function isIsogram(str) {
    let res = true
    let arr = str.toLowerCase().split('').sort()
    for (let i = 0; i < str.length; i++) {
        if (arr[i] === arr[i + 1]) {
            res = false
        }
    }
    return res
}