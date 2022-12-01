let number = function(busStops){
    let all = 0, out = 0
    busStops.forEach(el => {
        all += el[0]
        out += el[1]
    })
    return all - out
}


const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
