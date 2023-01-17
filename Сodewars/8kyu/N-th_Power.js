"use strict";

function index(array, n) {
   if (Number.isInteger((array[n] ** 2)) == true) {
      return array[n] ** n;
   } else {
      return -1;
   }
}