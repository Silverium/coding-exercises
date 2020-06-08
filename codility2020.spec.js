import { solution } from './codility2020';

describe('banners', () => {
  describe('Given "[3, 1, 4]"', () => {
    it('should return 10', () => {
      const result = solution([3, 1, 4]);
      expect(result).toBe(10);
    });
  });
  describe('Given "[5, 3, 2, 4],"', () => {
    it('should return 17', () => {
      const result = solution([5, 3, 2, 4]);
      expect(result).toBe(17);
    });
  });
  describe('Given "[7, 7, 3, 7, 7]"', () => {
    it('should return 35', () => {
      const result = solution([7, 7, 3, 7, 7]);
      expect(result).toBe(35);
    });
  });
});
