function friend(friends) {
   let arr = [];
   friends.forEach(e => {
      if (e.length === 4) {
         arr.push(e);
      }
   });
   return arr;
}