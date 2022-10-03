"use strict";

function smallEnough(a, limit) {
   let result = 0;
   a.forEach((e) => {
      if (e > limit) {
         result += 1;
      }
   })
   return result > 0 ? false : true;
}


// function smallEnough(a, limit){
//    return Math.max(...a) <= limit
// }