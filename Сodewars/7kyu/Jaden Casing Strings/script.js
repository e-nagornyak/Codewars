String.prototype.toJadenCase = function (string) {
    let arr = this.split(' ')
    return arr.map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}