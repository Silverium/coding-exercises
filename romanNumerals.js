const romanToNumber = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000],
  [1, 'I'],
  [5, 'V'],
  [10, 'X'],
  [50, 'L'],
  [100, 'C'],
  [500, 'D'],
  [1000, 'M'],
  [undefined, 0],
]);
const unitsToRoman = (num) => {
  if (num === 9) return 'IX';
  if (num === 4) return 'IV';
  return 'V'.repeat(num > 4) + 'I'.repeat(num % 5);
};
const tensToRoman = (num) => {
  if (num === 9) return 'XC';
  if (num === 4) return 'XL';
  return 'L'.repeat(num > 4) + 'X'.repeat(num % 5);
};
const hundredsToRoman = (num) => {
  if (num === 9) return 'CM';
  if (num === 4) return 'CD';
  return 'D'.repeat(num > 4) + 'C'.repeat(num % 5);
};
const thousandsToRoman = (num) => {
  if (num > 3) return 'unsupported';
  return 'M'.repeat(num);
};
export const RomanNumerals = (() => {
  return {
    toRoman: (num) => {
      let result = '';
      const thousands = (num / 1000) % 10 | 0;
      result += thousandsToRoman(thousands);
      const hundreds = (num / 100) % 10 | 0;
      result += hundredsToRoman(hundreds);
      const tens = (num / 10) % 10 | 0;
      result += tensToRoman(tens);
      const units = num % 10;
      result += unitsToRoman(units);
      return result;
    },
    fromRoman: (text) => {
      let result = 0;
      const letters = text.split('');
      for (let i = letters.length - 1; i > -1; i--) {
        const value = romanToNumber.get(letters[i]);
        const nextValue = romanToNumber.get(letters[i + 1]);
        result += value >= nextValue ? value : -value;
      }
      return result;
    },
  };
})();
