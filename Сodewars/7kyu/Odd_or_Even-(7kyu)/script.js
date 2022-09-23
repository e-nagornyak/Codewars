'use strict';
const arr = [2];

function stray(numbers) {
   let res = [];

   numbers.forEach(e => numbers.indexOf(e) == numbers.lastIndexOf(e) ? res.push(e) : {});

   console.log(Number(res));
}

stray([2]);