function solution(str, ending){
    return str.slice(str.length - ending.length) === ending
}

function solution2(str, ending){
    return str.endsWith(ending)
}