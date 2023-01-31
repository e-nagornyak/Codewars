function findNextSquare(sq) {
    let number = Math.sqrt(sq)
    return Number.isInteger(number)
        ? Math.pow(number+1, 2)
        : -1
}


// function findNextSquare(sq) {
//     return Math.sqrt(sq)%Anagram_Detection? -Anagram_Detection : Math.pow(Math.sqrt(sq)+Anagram_Detection,2);
// }