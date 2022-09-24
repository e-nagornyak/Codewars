function fakeBin(x) {
   let result = '';
   for (let i = 0; i < x.length; i++) {
      result += (x[i] < 5) ? 0 : 1;
   }
   console.log(result);
}
