function alphabetWar(fight) {
    const obj = {w: 4, p: 3, b: 2, s: 1, m: 4, q: 3, d: 2, z: 1}
    const finishText = ['Right side wins!', "Left side wins!", "Let's fight again!"]

    const sum = (req) => fight.replace(req, '').split('').reduce((a, b) => a + obj[b], 0)
    const left = sum(/[^wpbs]/g)
    const right = sum(/[^mqdz]/g)

    switch (true) {
        case left > right:
            return finishText[1]
        case right > left:
            return finishText[0]
        default:
            return finishText[2]
    }
}
