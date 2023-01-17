var min = function (list) {
    let rest = [...list].sort((a, b) => a - b)
    return rest[0];
}

var max = function (list) {
    let rest = [...list].sort((a, b) => a - b)
    return rest[rest.length - 1];
}