function towerBuilder(lines) {
    const tower = [];
    const width = lines * 2 - 1;

    for (let floor = 1; floor <= lines; floor++) {
        const numStars = floor * 2 - 1;
        const numSpaces = Math.floor((width - numStars) / 2);
        const floorString = " ".repeat(numSpaces) + "*".repeat(numStars) + " ".repeat(numSpaces);
        tower.push(floorString);
    }
    return tower;
}

function towerBuilder(n) {
    return Array.from({length: n}, function(v, k) {
        const spaces = ' '.repeat(n - k - 1);
        return spaces + '*'.repeat(k + k + 1) + spaces;
    });
}
