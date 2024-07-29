function createPhoneNumber(numbers) {
  if (numbers.length !== 10 || !numbers.every(num => num >= 0 && num <= 9)) {
    throw new Error("Array must contain exactly 10 integers between 0 and 9.");
  }

  const part1 = numbers.slice(0, 3).join('');
  const part2 = numbers.slice(3, 6).join('');
  const part3 = numbers.slice(6, 10).join('');

  return `(${part1}) ${part2}-${part3}`;
}

// // Test cases
// const testCases: Array<{ input: number[], expected: string }> = [
//   { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], expected: "(123) 456-7890" },
//   { input: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], expected: "(987) 654-3210" },
//   { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expected: "(012) 345-6789" },
// ];
//
// testCases.forEach(({ input, expected }, index) => {
//   const result = createPhoneNumber(input);
//   console.assert(result === expected, `Test case ${index + 1} failed: expected ${expected} but got ${result}`);
// });
//
// console.log("All test cases passed.");
