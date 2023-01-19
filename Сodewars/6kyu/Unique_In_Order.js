"use strict";

let uniqueInOrder = function (iterable) {
   let result = [];
   for (let i = 0, j = 1; i < iterable.length; i++, j++) {
      if (iterable[i] != iterable[j]) {
         result.push(iterable[i]);
      }
   }
   return result;
};