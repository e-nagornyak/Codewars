function capitalize(s) {
    let arr = s.split('')
    let newArr = ['', '']
    for (let i = 0; i < s.length; i++) {
        newArr[0] += (i % 2 === 0 ? arr[i].toUpperCase() : arr[i])
        newArr[1] += (i % 2 !== 0 ? arr[i].toUpperCase() : arr[i])
    }
    return newArr
}

capitalize('abcdef')
