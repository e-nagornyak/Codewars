function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return (enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate))
}