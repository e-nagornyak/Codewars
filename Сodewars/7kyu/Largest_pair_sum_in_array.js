function largestPairSum (numbers) {
    const sortedArray = numbers.sort((a,b) => b-a)
    return sortedArray[0] + sortedArray[1]
}
