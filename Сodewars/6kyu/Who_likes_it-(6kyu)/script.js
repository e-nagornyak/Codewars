"use strict";

function likes(array) {
   if (array.length == 0) {
      console.log('no one likes this');
   } else if (array.length == 1) {
      console.log(`${array[0]} likes this`);
   } else if (array.length == 2) {
      console.log(`${array[0]} and ${array[1]} like this`);
   } else if (array.length == 3) {
      console.log(`${array[0]}, ${array[1]} and ${array[2]} like this`);
   } else {
      console.log(`${array[0]}, ${array[1]} and ${array.length - 2} others like this`);
   }

}

let mass = ['Женя', "Вася", "Ліза", 'Женя', "Вася", "Ліза"];
likes(mass);
