export function titleCase(title, minorWords) {
    return title?.split(' ')?.map(((word, i) => {
        if (minorWords?.split(' ')?.some(m => m?.toLowerCase() === word?.toLowerCase()) && i >0){
            return word?.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1)?.toLowerCase()
    }))?.join(' ')
}


// console.log(titleCase("the quick brown fox", ));
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('First a of in', 'an often into'));

