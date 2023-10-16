// toptal task 1
export const solution = (S = []) => {
  const visitedLocations = Array.from(Array(S.length), ()=>new Set());
  // const visitedLocations = Array(S.length);
  const totalLocations = new Set()
  for (let i = 0; i < S.length; i++) {
    const location = S[i];
    totalLocations.add(location)
  }
  let minLength = S.length;
  for (let i = 0; i < S.length; i++) {
    const location = S[i];
    let j = i;
    visitedLocations[i].add(location)
    while(visitedLocations[i].size < totalLocations.size && (j < S.length)){
      visitedLocations[i].add(S[j])
      j++
    }
    if (visitedLocations[i].size === totalLocations.size){
      minLength = Math.min(minLength, j-i)
    }   
  }
  return minLength;
};
console.log(solution([7,3,7,3,1,3,4,1]))
