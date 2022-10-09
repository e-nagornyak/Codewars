// old solution
// function sum(numbers) {
//     return (numbers.length === 0) ? 0: numbers.reduce((a, b) => a + b);
// }

// new solution
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}