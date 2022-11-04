function minValue(values) {
   let newValues = [...new Set(values)]
   return Number(newValues.sort((a, b) => a - b).join(''))
}

// function minValue(values) {
//    const n = values
//       .filter((e, i, arr) => arr.indexOf(e) === i)
//       .sort()
//       .join('');
//    return Number(n);
// }