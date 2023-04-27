function nextBigger(n) {
    const arr = Array.from(String(n), Number);
    let pivot = -1;
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i] > arr[i - 1]) {
            pivot = i - 1;
            break;
        }
    }
    if (pivot === -1) return -1;
    for (let i = arr.length - 1; i > pivot; i--) {
        if (arr[i] > arr[pivot]) {
            [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
            break;
        }
    }
    const sortedArr = arr.slice(pivot + 1).sort((a, b) => a - b);
    const result = [...arr.slice(0, pivot + 1), ...sortedArr];
    return parseInt(result.join(''));
}