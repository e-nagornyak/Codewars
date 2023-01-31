function arithmetic(a, b, operator) {
   if (operator === 'add') {
      return a + b;
   } else if (operator === 'subtract') {
      return a - b;
   } else if (operator === 'multiply') {
      return a * b;
   } else if (operator === 'divide') {
      return a / b;
   }
}
arithmetic(3, 2, "subtract")

// other 

function arithmetic(a, b, operator) {
   optable = { "add": "+", "subtract": "-", "multiply": "*", "divide": "/" };
   return eval(a + optable[operator] + b);
}