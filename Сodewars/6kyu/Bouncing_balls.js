function bouncingBall(h, bounce, window) {
    if (bounce >= 1 || bounce <= 0) return -1
    let total = 0
    while (h > window) {
        total += 1
        h = h * bounce
        total += 1
    }
    return total - 1
}