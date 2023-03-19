function wave(str){
    let waveArr = [];
    for(let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (letter === " ") {
            continue;
        } else {
            waveArr.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
        }
    }
    return waveArr;
}

function wave(str){
    let result = [];

    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });

    return result;
}