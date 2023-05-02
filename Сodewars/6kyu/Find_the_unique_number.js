function findUniq(arr) {
    arr.sort()
    if (arr[0] !== arr[1]) {
        return arr[0];
    }
    return arr[arr.length - 1];
}

function findUniq(arr) {
    const countMap = new Map();
    for (let num of arr) {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    }

    for (let [num, count] of countMap) {
        if (count === 1) {
            return num;
        }
    }
}