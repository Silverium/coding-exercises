// codility 2020 challenge. Golden awarded :D 
export const solution = (H) => {
  const { length } = H;
  const maxFromRight = Array(length - 1).concat([H[length - 1]])
  for (let i = length - 2; i >= 0; i--){
    maxFromRight[i] =(Math.max(maxFromRight[i + 1], H[i]))
  }
  let firstBanner = maxFromRight[0] * H.length;
  let secondBanner = 0;
  let result = firstBanner + secondBanner;
  const maxFromLeft =[H[0]]
  for (let i = 1; i < length; i++) {
    maxFromLeft.push(Math.max(maxFromLeft[i -1], H[i]))
    firstBanner = maxFromLeft[i - 1] * (i);
    secondBanner = maxFromRight[i] * (length - i);
    result = Math.min(firstBanner + secondBanner, result);
  }

  return result;
};
console.log(solution([3, 1, 4]));
