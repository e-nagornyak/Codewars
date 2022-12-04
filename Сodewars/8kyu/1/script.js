function pipeFix(numbers) {
    let arr = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
        arr.push(i)
    }
    console.log(arr)
}

pipeFix([1,2,3,5,6,8,9])

const pipeFix = arr => Array(arr.pop() - arr[0] + 1).fill(0).map((e,i) => i + arr[0])
