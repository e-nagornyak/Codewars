const reverse = (array) => {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(array[array.length - 1 - i])
    }
    return arr;
}