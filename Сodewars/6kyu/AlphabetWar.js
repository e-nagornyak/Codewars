function alphabetWar(fight) {
    const obj = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
    const res = fight.split('').reduce((a, b) => a + (obj[b] || 0), 0);
    return res ? (res < 0 ? "Left" : "Right") + " side wins!" : "Let's fight again!";
}
