// toptal task 1
export const compressString = (S) => {
  const changingIndexes = [];
  let counter = 1;
  let accumulatedLetter = S.charAt(0);
  let result = '';
  for (let i = 1; i < S.length + 1; i++) {
    const currentLetter = S.charAt(i);
    if (accumulatedLetter === currentLetter) {
      counter++;
    } else {
      changingIndexes.push(i);
      result += (counter > 1 ? counter : '') + accumulatedLetter;
      accumulatedLetter = currentLetter;
      counter = 1;
    }
  }
  return [result, changingIndexes];
};
export const solution = (S = '', K = 0) => {
  const [shortened, keys] = compressString(S);
  let res = shortened.length;
  for (let i = 0; i < keys.length; i++) {
    const croppedString = S.substring(0, keys[i]) + S.substring(keys[i] + K);
    const [croppedShortened] = compressString(croppedString);
    if (croppedShortened.length < res) {
      res = croppedShortened.length;
      // If K different letters are removed, non repeated, we can save
      // those amount + 2 maximum
      // example with K=2 and 'AABCAA' compressed '2ABC2A' and cropped is '4A'
      // so K + 2 letters are saved, because digit is not added to number of As, but
      // in given 'ABCAAAAAAAAA' compressed to 'ABC9A' cropped is '10A' where we only save K
      if (res === shortened.length - K - 2) break;
    }
  }
  return res;
};
