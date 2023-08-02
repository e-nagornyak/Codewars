function WhatDay(num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[--num] || 'Wrong, please enter a number between 1 and 7'
}
