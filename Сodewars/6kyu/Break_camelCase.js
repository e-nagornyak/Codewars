function solution(s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c === c.toUpperCase()) {
            result += ' ' + c;
        } else {
            result += c;
        }
    }
    return result;
}
