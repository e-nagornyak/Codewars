"use strict";

function sumTwoSmallestNumbers(numbers) {
   let array = numbers.sort(function compareNumbers(a, b) {
      return a - b;
   });
   return (array[0] + array[1]);
}