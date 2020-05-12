import { RomanNumerals } from './romanNumerals';
describe('Roman Numerals', () => {
  describe('Roman to Number', () => {
    const cases = [
      ['XXI', 21],
      ['I', 1],
      ['III', 3],
      ['IV', 4],
      ['MMVII', 2007],
      ['MDCLXIX', 1669],
    ];
    test.each(cases)('%s should be translated to %d', (text, num) => {
      expect(RomanNumerals.fromRoman(text)).toBe(num);
    });
  });
  describe('Number to Roman', () => {
    const cases = [
      [1000, 'M'],
      [999, 'CMXCIX'],
      [44, 'XLIV'],
      [4, 'IV'],
      [9, 'IX'],
      [1, 'I'],
      [1993, 'MCMXCIII'],
      [2006, 'MMVI'],
      [2020, 'MMXX'],
    ];
    test.each(cases)('%d should be translated to %s', (num, text) => {
      expect(RomanNumerals.toRoman(num)).toBe(text);
    });
  });
});
