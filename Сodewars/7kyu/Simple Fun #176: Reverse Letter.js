function reverseLetter(str) {
    return str?.replace(/[^a-zA-Z]/g, '')?.split('').reverse().join('')
}
