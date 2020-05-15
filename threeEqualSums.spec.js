import { solution } from './threeEqualSums';

describe('three equal sums removing hinges', () => {
  const trueCases = [
    [
      [1, 1, 1, 100, 2, 1, 1000, 1, 2]
    ],
    [
      [5, 123, 5, 9, 5]
    ],
    [
      [10, 0, 5, 5, 99999, 3, 2, 1, 4],
    ],
  ];
  it.each(trueCases)('should return true when it is possible', (input) => {
    expect(solution(input)).toBe(true);
  });
  const falseCases = [
    [
      []
    ],
    [
      [1]
    ],
    [
      [1, 1, 1, 1]
    ],
    [
      [1, 1, 1, 1, 2]
    ],
    [
      [1, 2, 3, 4, 5, 6]
    ],
  ];
  it.each(falseCases)('should return false when it is NOT possible', (input) => {
    expect(solution(input)).toBe(false);
  });
});
