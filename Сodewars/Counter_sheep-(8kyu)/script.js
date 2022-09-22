'use strict';

var countSheep = function (num) {
   let s = "";
   for (let i = 1; i <= num; i++) {
      s += `${i} sheep...`;
   }
   console.log(s);
};


countSheep(2);