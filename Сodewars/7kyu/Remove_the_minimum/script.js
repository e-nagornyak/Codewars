function removeSmallest(numbers) {
    let min = [...numbers].sort((a, b) => a - b)
    let newArr = [...numbers]
    delete newArr[newArr.indexOf(min[0])]
    return newArr.filter(el => el !== undefined)
}

function Other(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));