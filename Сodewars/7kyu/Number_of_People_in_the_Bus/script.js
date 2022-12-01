let number = function(busStops){
    let all = 0, out = 0
    busStops.forEach(el => {
        all += el[0]
        out += el[1]
    })
    return all - out
}