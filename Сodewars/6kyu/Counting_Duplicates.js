function duplicateCount(text) {
    let res = []
    let test = text.toLowerCase().split('').sort()

    test.forEach((el, index) => {
        if (el === test[index + 1]) {
            res.push(el)
        }
    })
    let set = new Set(res)
    return set.size
}