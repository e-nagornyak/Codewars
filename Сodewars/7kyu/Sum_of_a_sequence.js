const sequenceSum = (begin, end, step) => {
    let a = 0;
    for (; begin <= end;) {
        a += begin
        begin += step
    }
    return a
};