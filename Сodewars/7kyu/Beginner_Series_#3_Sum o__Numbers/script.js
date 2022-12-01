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

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

function GetSum(a,b)
{
    return (Math.abs(a - b) + 1) * (a+b) / 2;
}