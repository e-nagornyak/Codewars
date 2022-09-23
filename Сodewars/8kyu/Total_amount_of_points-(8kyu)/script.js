function points(games) {
   let result = 0;
   games.forEach(e => {
      if (e[0] > e[2]) {
         result += 3;
      } else if (e[0] < e[2]) {
         result += 0;
      } else if (e[0] == e[2]) {
         result += 1;
      }
   });
   console.log(result);
}