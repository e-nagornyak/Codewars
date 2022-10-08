function roundToNext5(n) {
    if (n % 5 === 0) {
        console.log(n)
    } else {
        for (; n % 5 !== 0; n++) {}
        console.log(n)
    }
}

roundToNext5(-5)

// function roundToNext5(n){
//     return Math.ceil(n/5)*5;
// }

// function roundToNext5(n){
//     while(n % 5 !== 0) n++;
//     return n;
// }

// function roundToNext5(n){
//     if (n % 5 == 0 || n == 0){
//         return n
//     } else {
//         return roundToNext5(n+1);
//     }
//
// }