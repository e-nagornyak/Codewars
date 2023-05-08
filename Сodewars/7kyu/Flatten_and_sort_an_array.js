function flattenAndSort(array) {
    return array.flat().sort((a, b) => a - b)
}

const arr2 = [0, 1, 2, [[[3, 4]]]];
flattenAndSort(arr2)