function vowelIndices(word) {
    const arr = []
    word.split('').forEach((e, i) => {
        if (/[aeiouyAEIOUY]/.test(e)) arr.push(i + 1)
    })
    return arr
}
