import { solution } from './growingDifferentVectors';
describe('growing different vectors', () => {
  describe('three vectors', () => {
    const input = {
      tags: 'ABDCA',
      X: [2, -1, -4, -3, 3],
      Y: [2, -2, 4, 1, -3],
    };
    it('should pass', () => {
      expect(solution(...Object.values(input))).toBe(3);
      expect(1).toBeTruthy();
    });
  });
  describe('two coincident vectors', () => {
    it('should return inner vectors', () => {
      const input = {
        tags: 'ABB',
        X: [1, -2, -2],
        Y: [1, -2, -2],
      };
      expect(solution(...Object.values(input))).toBe(1);
    });
  });
  describe('two starter coincident vectors ', () => {
    it('should return zero', () => {
      const input = {
        tags: 'CCD',
        X: [1, -1, 2],
        Y: [1, -1, 2],
      };
      expect(solution(...Object.values(input))).toBe(0);
    });
  });
});
