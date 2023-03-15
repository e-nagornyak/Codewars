// it`s my first solution
function comp(array1, array2) {
    let res = true
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return
    }

    function newArr(arr) {
        return arr.sort((a, b) => a - b)
    }

    let arr1 = newArr(array1)
    let arr2 = newArr(array2)

    for (let i = 0; i < array1.length; i++) {
        const a = arr1[i] === arr2[i] || arr1[i] === Math.sqrt(arr2[i])
        if (!a) {
            return false
        }
    }
    return res
}

console.log(comp([], null));

// other solutions
function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

function comp(a, b) {
    return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}