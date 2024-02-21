function titleCase(title, minorWords) {
    return title?.split(' ')?.map(((word, i) => {
        if (minorWords?.split(' ')?.some(m => m?.toLowerCase() === word?.toLowerCase()) && i >0){
            return word?.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1)?.toLowerCase()
    }))?.join(' ')
}
