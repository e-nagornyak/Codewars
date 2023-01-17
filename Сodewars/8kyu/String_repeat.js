function repeatStr(n, s) {
    let str = '';
    for (let i = 0; i <n; i++){
        str+=s;
    }
    console.log(str)
}

// repeatStr = (n, s) => s.repeat(n)
//
// or full
//
// function repeatStr (n, s) {
//     return s.repeat(n);
// }