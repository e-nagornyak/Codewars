function queueTime(customers, n) {
    let tills = Array(n).fill(0);
    for (let i = 0; i < customers.length; i++) {
        let nextCustomer = customers[i];
        let nextTill = tills.indexOf(Math.min(...tills));
        tills[nextTill] += nextCustomer;
    }
    return Math.max(...tills);
}