function createPhoneNumber(n) {
   let str = n.join('');
   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`
}

// function createPhoneNumber(numbers) {
//    var format = "(xxx) xxx-xxxx";

//    for (var i = 0; i < numbers.length; i++) {
//       format = format.replace('x', numbers[i]);
//    }

//    return format;
// // 