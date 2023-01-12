String.prototype.toJadenCase = function (string) {
    let arr = this.split(' ')
    return arr.map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
}

// String.prototype.toJadenCase = function() {
//     return this
//         .split(" ")
//         .map(i => i.replace(i[0], i[0].toUpperCase()))
//         .join(" ");
// };