String.prototype.isUpperCase = function() {
    return this.split('').every(el => el === el.toUpperCase())
}