function minMax(arr) {
    let newArr = arr.sort((a, b) => a - b);
    return [newArr[0], newArr[newArr.length - 1]]
}

// function minMax(arr){
//     return [Math.min(...arr), Math.max(...arr)];
// }