function duplicateCount(text) {
    let res = []
    let test = text.toLowerCase().split('').sort()

    test.forEach((el, index) => {
        if (el === test[index + 1]) {
            res.push(el)
        }
    })
    let set = new Set(res)
    return set.size
}


// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }