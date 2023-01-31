function isTriangle(a, b, c) {
    let arr = [a, b, c].sort((a, b) => a - b);
    if(arr[0] + arr[1] >= arr[2]){
        console.log(true);
    } else{
        console.log(false);
    }
}

isTriangle(7,9,2)

// function isTriangle(a,b,c)
// {
//     return a + b > c && a + c > b && c + b > a;
// }
//
// var isTriangle = (a,b,c) => Math.max(a,b,c)<(a+b+c)/2