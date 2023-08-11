function chooseBestSum(t, k, ls) {
    let arr = [];

    function rec(sum, ar, n) {
        if (n === 0) {
            arr.push(sum);
        } else {
            for (let i = 0; i < ar.length; i++) {
                rec(sum+ar[i], ar.slice(i+1), n-1);
            }
        }
    }

    rec(0, ls, k);

    const sol = arr.sort( (a, b) => b - a).find( a => a <= t);
    return typeof sol === 'undefined' ? null : sol;
}
