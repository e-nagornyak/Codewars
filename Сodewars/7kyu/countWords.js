function test(words) {
    return words.reduce((acc, val, index) => {
        // acc[val] = (acc[val] || 0) + 1
        // acc[val] = acc[val] ? acc[val] + 1 : 1
        // acc[val] = acc[val] ? acc[val] + 1 : 1
        return acc
    }, {})
}

console.log(test(['Apple', 'Banana', 'Banana', 'Orange']));