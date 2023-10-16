import { solution } from './treeRange'
describe('treeRange', () => {
  describe('example in codility', () => {
    it('should return 12', () => {
      expect(solution([2, 0, 2, 2, 1, 0])).toBe(12)
    });
  });
  describe('from 0 to 1', () => {
    it('should return 3', () => {
      expect(solution([1])).toBe(3) // (0,0), (0,1), (1,1)
    });
  });
  describe('from 0 to 2 consecutive', () => {
    it('should return 6', () => {
      expect(solution([0, 0, 1])).toBe(6) // (0,0), (0,1), (0,2), (1,1), (1,2), (2,2)
    });
  });
  describe('from 0 to 3 consecutive', () => {
    it('should return 10', () => {
      expect(solution([0, 0, 1, 2])).toBe(10) // (0,0), (0,1), (0,2), (0,3), (1,1), (1,2), (1,3), (2,2), (2,3), (3,3),
    });
  });
  describe('from 0 to 3 disconnected', () => {
    it('should return 7', () => {
      expect(solution([0, 0, 0, 0])).toBe(7) // (0,0), (0,1), (0,2), (0,3), (1,1), (2,2), (3,3),
    });
  });
  describe('from 0 to 3 and 2 to 3', () => {
    it('should return 10', () => {
      expect(solution([2,0,2,2,2])).toBe(11) // (0,0), (0,1), (0,2), (0,3), (0,4),(1,1), (2,2), (2,3), (2,4) (3,3), (4,4)
    });
  });
  describe('star n 10', () => {
    it.each([])('should return %d %j', () => {
      expect(solution([0,0,1,2,3,4,0,6,7,8,9])).toBe(42)
    });
  });
});

