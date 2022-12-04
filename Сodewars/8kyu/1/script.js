function pipeFix(numbers) {
    let arr = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        arr.push(i)
    }
    console.log(arr)
}

pipeFix([1,2,3,5,6,8,9])