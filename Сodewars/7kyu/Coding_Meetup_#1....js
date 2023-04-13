function countDevelopers(list) {
    return list.filter(s => s.continent === 'Europe' && s.language === 'JavaScript').length
}