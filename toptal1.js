// toptal task 1
const nameRegex = /(\w+\d+)(\w*)/
const parseName = (name) =>{
  const [originalName, description, part] = name.match(nameRegex)
  return [description, part]
}
const okRegex= new RegExp('ok', 'i')
const isOk = score => okRegex.test(score)
export const solution = (S = [], K = []) => {
  const resultsMap = new Map()
  for (let i = 0; i < S.length; i++) {
    const name = S[i];
    const score = K[i]
    const [description, part] = parseName(name)
    if(resultsMap.has(description)){
      resultsMap.get(description).push(isOk(score))
    } else {
      resultsMap.set(description, [isOk(score)])
    }
    
  }
  let resultsCounter = 0;
  for(let [,results] of resultsMap){
    if(results.every(r => r)){
      resultsCounter += 1
    }
  }
  return (resultsCounter / resultsMap.size * 100) | 0;
};
console.log(solution(['a1','a2a', 'a2b', 'a3'], ['ok','asdf','ok','asdf']))
console.log(parseName('test1'))
console.log(isOk('Ok'))