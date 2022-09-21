function countSheeps(arrayOfSheep) {
   let count = 0;
   arrayOfSheep.forEach(e => {
      (e === true) ? count++ : '';
   });
   console.log(count);
}


countSheeps([true, true, true, false,
   true, true, true, true,
   true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true, false, true])