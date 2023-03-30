function generateHashtag(str) {
    if (str.length && str.trim()) {
        let arr = str.replace(/[\t#]+/g, '').split(' ')
        arr = arr.filter(el => el.length !== 0)
        arr = ["#", ...arr.map(el => el[0].toUpperCase() + el.slice(1, el.length))].join('')
        return arr.length <= 140 ? arr : false
    }
    return false
}

