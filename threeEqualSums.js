/**
 * codility.
 * iteratee to use in a reduce function, that accumulates all values in the array
 */
const accumulate = (acc, value) => acc + value;
/**
 * Given [a,..., an, b, c, ... cn, d, e, ...en]
 * a+...an = c+...cn = e+...en
 * for sure,  ∑a will never be greater than 1/3  of total
 *
 * - One approach would be split in three even arrays, and then start moving the points, trying to reach the balance
 * - another approach, could be setting the first array to one third, and then check if second is possible, and then, remaining values should match. From that point, begin moving first hinge to left
 * - A third approach, is start accumulating from left one step, then check if in the right end we can have a match, and then check the remaining in the middle also matches.
 * To achieve that, we need to start picking one entry from left, then pick as many from right until exact match, if we surpass, then we start adding to the left until match or surpass.
 * If the remaining in the middle is smaller thant the other two, then we return false.

 * @param A Array of integers representing the time spent by a worker in one request
 */
export function solution(A) {
  const { length } = A;
  // we need at least one request per worker
  if (length < 5) {
    return false;
  }
  let middleSliceAcc = A.reduce(accumulate);

  let firstHingeIndex = 0;
  let firstSliceAcc = 0;
  let lastHingeIndex = length - 1;
  let lastSliceAcc = 0;
  const moveLastHinge = () => {
    lastSliceAcc += A[lastHingeIndex];
    lastHingeIndex -= 1;
    middleSliceAcc -= A[lastHingeIndex];
  };
  const moveFirstHinge = () => {
    firstSliceAcc += A[firstHingeIndex];
    firstHingeIndex += 1;
    middleSliceAcc -= A[firstHingeIndex];
  };
  middleSliceAcc = middleSliceAcc - A[firstHingeIndex] - A[lastHingeIndex];
  const isStartGreater = () => firstSliceAcc > lastSliceAcc;
  const isLastGreater = () => firstSliceAcc < lastSliceAcc;
  while (middleSliceAcc > firstSliceAcc) {
    if (firstSliceAcc === lastSliceAcc) {
      moveFirstHinge();
    }
    while (isStartGreater()) {
      moveLastHinge();
    }
    while (isLastGreater()) {
      moveFirstHinge();
    }
  }

  return firstSliceAcc === middleSliceAcc;
}
