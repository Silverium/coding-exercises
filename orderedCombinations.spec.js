const _ = require('lodash');
import { solution } from './orderedCombinations';

describe('repeated numbers', () => {
  it('should count distinct combinations', () => {
    const input = [1, 1, 1, 1, 1];
    expect(solution(input)).toBe(1);
  });
});
describe('combined and repeated', () => {
  it('should distinguish repeated at start ', () => {
    const input = [2, 1, 1, 1, 1, 1];
    expect(solution(input)).toBe(2);
  });
  it('should distinguish repeated at second', () => {
    const input = [1, 2, 1, 1, 1, 1];
    expect(solution(input)).toBe(3);
  });
  it('should distinguish repeated at middle', () => {
    const input = [1, 1, 2, 1, 1, 1];
    expect(solution(input)).toBe(4);
  });
  it('should distinguish repeated at end', () => {
    const input = [1, 1, 1, 1, 1, 2];
    expect(solution(input)).toBe(2);
  });
  it('should count the same combinations for repeated sequence', () => {
    const input = _.times(500, (n) => n % 2);
    expect(solution(input)).toBe(8);
  });
});
describe('performance', () => {
  it('should take less than 300ms for 30 repeated numbers', () => {
    const input = _.times(100000, () => _.random(30));
    const start = new Date();
    solution(input);
    const t = new Date() - start;
    expect(t < 300).toBe(true);
  });
  it('should take less than 300ms for different numbers', () => {
    const input = _.times(100000, (n) => n);
    const start = new Date();
    const result = solution(input);
    const t = new Date() - start;
    expect(result).toBe(666700000);
    expect(t < 300).toBe(true);
  });
});
