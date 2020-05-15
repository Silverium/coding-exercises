// codility zync 2018 challenge
// Given an array A, count the number of different triplets (a, b, c) in which a occurs before b and b occurs before c.
export const solution = (A, SUBSEQUENCE_DEPTH = 3) => {
  const { length } = A;
  if (!length) return length;
  const combinationsByDepth = Array.from(Array(SUBSEQUENCE_DEPTH), () => []);
  let lastIndex = new Map();

  combinationsByDepth[0][0] = 1;
  lastIndex.set(A[0], 0);
  for (let i = 1; i < length; i++) {
    if (!lastIndex.has(A[i])) {
      combinationsByDepth[0][i] = combinationsByDepth[0][i - 1] + 1;
    } else {
      combinationsByDepth[0][i] = combinationsByDepth[0][i - 1];
    }
    lastIndex.set(A[i], i);
  }
  for (let depth = 1; depth < SUBSEQUENCE_DEPTH; depth++) {
    lastIndex = new Map();
    combinationsByDepth[depth][0] = 0;
    for (let i = 1; i < length; i++) {
      const currentCombinations = combinationsByDepth[depth][i - 1];
      const combinationsToTheLeft = combinationsByDepth[depth - 1][i - 1];

      const aggregatedCombinations =
        currentCombinations + combinationsToTheLeft;
      if (!lastIndex.has(A[i])) {
        combinationsByDepth[depth][i] = aggregatedCombinations;
      } else {
        const combinationsToTheLeftLastTime =
          combinationsByDepth[depth - 1][lastIndex.get(A[i]) - 1];
        combinationsByDepth[depth][i] =
          aggregatedCombinations - combinationsToTheLeftLastTime;
      }
      lastIndex.set(A[i], i);
    }
  }
  return (
    combinationsByDepth[SUBSEQUENCE_DEPTH - 1][length - 1] % Math.pow(10, 9)
  );
};
