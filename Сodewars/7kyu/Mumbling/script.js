function accum(s) {
    let str = [];
    for (let i = 0; i < s.length; i++) {
        str.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i))
    }
    return str.join('-')
}