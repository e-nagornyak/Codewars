function solution(str) {
  const response = []

  for (let i = 0; i < str?.length; i += 2) {
    const pair = str?.slice(i, i + 2)
    response?.push(pair?.length === 2 ? pair : pair + '_')
  }

  return response
}


// function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// }
