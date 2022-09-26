const reverseSeq = n => {
   let result = [];
   while (n >= 1) {
      result.push(n);
      n--;
   }
   console.log(result);
};

reverseSeq(5);