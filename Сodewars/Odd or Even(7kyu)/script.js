'use strict';
function oddOrEven(array) {
   if (array == '') {
      console.log('even');
   } else {
      let total = array.reduce((a, b) => a + b);
      console.log(total % 2 === 0 ? 'even' : 'odd');
   }
}


oddOrEven([1, 1]);