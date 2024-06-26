function isValid(s: string): boolean {
    const res: string[] = [];
    const variants = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let char of s) {
        if (char in variants) {
            res.push(char);
        } else {
            const top = res.pop();
            if (char !== variants[top]) {
                return false;
            }
        }
    }

    return res.length === 0;
}
