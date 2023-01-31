let isAnagram = (test, original) => {
    let a = test.toUpperCase().split("").sort().join('')
    let b = original.toUpperCase().split("").sort().join('')
    return a === b
};