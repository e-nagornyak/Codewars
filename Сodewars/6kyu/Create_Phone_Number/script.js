function createPhoneNumber(n) {
   let str = n.join('');
   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`
}