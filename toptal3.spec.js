import { solution } from './toptal3';

describe('compressed string', () => {
  describe('Given "ABBBCCDDCCC" with K 3', () => {
    it('should return 5 ("A3B4C")', () => {
      const result = solution('ABBBCCDDCCC', 3);
      expect(result).toBe(5);
    });
  });
  describe('Given "AAAAAAAAAABXXAAAAAAAAAAA" with K 3', () => {
    it('should return 3 ("21A")', () => {
      const result = solution('AAAAAAAAAABXXAAAAAAAAAAA', 3);
      expect(result).toBe(3);
    });
  });
  describe('Given "ABCDDDEFG" with K 2', () => {
    it('should return 6 ("ABC3DG")', () => {
      const result = solution('ABCDDDEFG', 2);
      expect(result).toBe(6);
    });
  });
});
