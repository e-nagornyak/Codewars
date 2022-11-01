"use strict";

function getMiddle(s) {
   if (s.length % 2 == 0) {
      return (s[((s.length / 2) - 1)] + s[(s.length / 2)]);
   } else {
      return (s[Math.floor(s.length / 2)]);
   }
}

// function getMiddle(s) {
//    let a = s.length
//    let b = a % 2 ? s[Math.floor(a / 2)] : `${s[Math.floor(a / 2 - 1)]}${s[Math.floor(a / 2)]}`
//    return b
// }