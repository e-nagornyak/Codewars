function solution(list) {
    let ranges = [];
    for (let i = 0; i < list.length; i++) {
        let start = list[i];
        let end = start;
        while (i < list.length - 1 && list[i + 1] === end + 1) {
            end = list[i + 1];
            i++;
        }
        if (end - start >= 2) {
            ranges.push(start + '-' + end);
        } else if (end - start === 1) {
            ranges.push(start, end);
        } else {
            ranges.push(start);
        }
    }
    return ranges.join(',');
}