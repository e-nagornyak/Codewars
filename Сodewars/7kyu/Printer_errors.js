function printerError(s) {
    let errorCount = s.replace(/[a-m]/gi, '').length
    return `${errorCount}/${s.length}`
}

console.log(printerError("aaabbbbhaijjjm"));