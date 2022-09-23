'use strict';

function smash(words) {
   let result = [];
   for (let i = 0; i < words.length; i++) {
      result.push(words[i]);
   }
   console.log(result.join(" "));
}
smash(["hello", "amazing", "world"]);


// or

// smash = function (words) {
//    return words.join(" ");
// };