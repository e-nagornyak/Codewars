function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while(principal < desired){
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));