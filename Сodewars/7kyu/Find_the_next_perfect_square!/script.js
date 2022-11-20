function findNextSquare(sq) {
    let number = Math.sqrt(sq)
    return Number.isInteger(number)
        ? Math.pow(number+1, 2)
        : -1
}


// function findNextSquare(sq) {
//     return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }