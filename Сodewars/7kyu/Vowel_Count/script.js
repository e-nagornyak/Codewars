function getCount(str) {
    let count = 0;
    str.split('').forEach((e) => {
        if (e === "a" || e === "e" || e === "i" || e === "o" || e === "u") {
            count++
        }
    })
    return count;
}