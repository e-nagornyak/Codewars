function remove(string) {
    return string.split(' ').filter(el => {
        let count = 0
        el.split('').forEach(w => w === '!' ? ++count : '')
        return count !== 1
    }).join(' ')
}

console.log(remove(("Hi! !Hi Hi!!")));

