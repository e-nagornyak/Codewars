function solve(str) {
    let lowercaseCount = 0,
        uppercaseCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            lowercaseCount++;
        } else {
            uppercaseCount++;
        }
    }

    if (lowercaseCount === uppercaseCount || lowercaseCount > uppercaseCount) {
        return str.toLowerCase();
    } else {
        return str.toUpperCase();
    }
}