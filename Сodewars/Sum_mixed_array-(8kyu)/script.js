'use strict';

function sumMix(x) {
   let total = 0;
   x.forEach(e => {
      total += Number(e);
   });
   return total;
}