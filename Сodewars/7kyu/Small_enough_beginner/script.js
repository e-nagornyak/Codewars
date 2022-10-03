"use strict";

function openOrSenior(data) {
   let a = [];
   if (data.length === 0) {
      return data;
   }
   for (let i = 0; i < data.length; i++) {
      if (data[i][0] >= 55 && data[i][1] > 7) {
         a.push('Senior');
      } else {
         a.push('Open');
      }
   }
   return a;
}