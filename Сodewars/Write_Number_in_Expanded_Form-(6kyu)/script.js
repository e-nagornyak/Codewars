"use strict";

function expandedForm(num) {
   num = num.toString();
   const e = [];
   let m = 1;

   for (let i = 1; i <= num.length; i++) {
      const d = num[num.length - i];

      d > 0 && e.unshift(d * m)

      m *= 10;
   }
   return e.join(' + ');
}