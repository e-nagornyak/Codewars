function capitalize(s) {
    let arr = s.split('')
    let newArr = ['', '']
    for (let i = 0; i < s.length; i++) {
        newArr[0] += (i % 2 === 0 ? arr[i].toUpperCase() : arr[i])
        newArr[1] += (i % 2 !== 0 ? arr[i].toUpperCase() : arr[i])
    }
    return newArr
}

capitalize('abcdef')


// function capitalize(s){
//     const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
//     const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
//     return [even, odd];
// };