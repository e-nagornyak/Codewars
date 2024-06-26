const test = (num) => {
    let arr = num.toString().split('').reverse().join('')
    console.log(num === +arr)
}
test(121)
