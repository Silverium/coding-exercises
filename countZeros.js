// codewars kata
// Create an algorithm to count the number of zeros that appear between 1 and N.
function check(n) {
  // this function has O(n2)
  var s = '',
    i = 0;
  while (++i <= n) s += i;
  return s.replace(/[^0]/g, '').length;
}
/**
 * This function has complexity O(log n), because complexity is depending on
 * digits of "n", as it's on base 10, complexity is logarithm in base 10 😄
 * @param {Number} n
 */
export const countZeros = (n) => {
  const chars = String(n).split('');
  const d = chars.length; // digits of the number
  let result = 0;
  for (let i = 0; i < d; i++) {
    const leftDigits = Number(chars.slice(0, i).join('')) || 0;
    const toLeft = leftDigits * Math.pow(10, d - 1 - i);
    if (chars[i] === '0' && i < d - 1) {
      const rightDigits = Number(chars.slice(i + 1).join(''));
      const totalZerosPossible = Math.pow(10, d - 1 - i) - 1;
      const toRemove = totalZerosPossible - rightDigits;
      result -= toRemove;
    }
    result += toLeft;
  }

  return result;
}