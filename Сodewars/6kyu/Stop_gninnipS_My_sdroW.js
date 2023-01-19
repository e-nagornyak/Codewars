function spinWords(string) {
    let arr = string.split(' '),
        reverseArr = [];
    arr.forEach((e) => {
        if (e.length < 5) {
            reverseArr.push(e)
        } else if (e.length >= 5) {
            reverseArr.push(e.split('').reverse().join(''))
        }
    })
    return reverseArr.join(' ')
}
// function spinWords(words){
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }