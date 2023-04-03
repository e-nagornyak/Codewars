function duplicateEncode(word) {
    let res = ''
    let arr = word.toLowerCase().split('')
    for (let i = 0; i < word.length; i++) {
        let count = 0
        arr.forEach(el => el === arr[i] ? count++ : '')
        if (count > 1) {
            res += ')'
        } else {
            res += '('
        }
    }
    return res
}