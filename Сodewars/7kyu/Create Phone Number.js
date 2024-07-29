function createPhoneNumber(numbers) {
  if (numbers.length !== 10 || !numbers.every(num => num >= 0 && num <= 9)) {
    throw new Error("Array must contain exactly 10 integers between 0 and 9.");
  }

  const part1 = numbers.slice(0, 3).join('');
  const part2 = numbers.slice(3, 6).join('');
  const part3 = numbers.slice(6, 10).join('');

  return `(${part1}) ${part2}-${part3}`;
}
