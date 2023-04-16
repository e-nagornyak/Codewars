function isPangram(string){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowercaseStr = string.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (lowercaseStr.indexOf(alphabet[i]) === -1) {
            return false;
        }
    }
    return true;
}