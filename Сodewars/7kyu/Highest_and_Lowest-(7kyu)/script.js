function highAndLow(numbers) {
   let sort = (numbers.split(' ').sort((a, b) => a - b));
   console.log(`${sort[sort.length - 1]} ${sort[0]}`);
}
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
