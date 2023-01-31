function findShort(s) {
    let a = s.split(' ').map(e => e.length).sort((a, b) => a - b)
    console.log(a)
}