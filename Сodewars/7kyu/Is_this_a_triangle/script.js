function isTriangle(a, b, c) {
    let arr = [a, b, c].sort((a, b) => a - b);
    if(arr[0] + arr[1] >= arr[2]){
        console.log(true);
    } else{
        console.log(false);
    }
}

isTriangle(7,9,2)
