function findOdd(A) {
    let t = 0;
    let arr = A.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                t++;
            }
        }
        if (t % 2 !== 0) {
            return arr[i];
        }
    }
}