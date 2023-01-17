function doubleChar(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        newStr += str[i].repeat(2);
    }
    return newStr;
}


// Using an array
// const doubleChar = (str) => str.split("").map(c => c + c).join("");
