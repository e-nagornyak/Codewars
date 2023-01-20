function longest(s1, s2) {
    let set = new Set(s1 + s2)
    return [...set].sort().join('')
}
