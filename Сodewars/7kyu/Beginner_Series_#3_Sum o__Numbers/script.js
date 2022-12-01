let getSum = (a, b) => {
    let sortArr = [a, b].sort((a, b) => a - b)
    let res = []
    for (; sortArr[0] <= sortArr[1];) {
        res.push(sortArr[0])
        sortArr[0]++
    }
    console.log(res.reduce((a, b) => a + b))
}


getSum(0, -1)