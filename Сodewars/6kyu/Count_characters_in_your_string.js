function count(string) {
    let res = {}
    string.split('').forEach(el => res[el] = ++res[el] || 1)
    return res
}