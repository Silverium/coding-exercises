import { find, Factory } from './typoTolerance';
describe('Fuzzy Filter', () => {
  describe('no characters', () => {
    const finder = Factory({ minChars: 0, typos: 0 });
    it('should be truty for any source text', () => {
      expect(finder('', 'hello')).toBeTruthy();
    });
    it('should be truthy without source text', () => {
      expect(finder('', 'hella')).toBeTruthy();
    });
  });
  describe('single character', () => {
    const finder = Factory({ minChars: 1, typos: 0 });
    it('should be falsy for no total coincidences', () => {
      expect(finder('a', 'hello')).toBeFalsy();
    });
    it('should find without typo tolerance', () => {
      expect(finder('a', 'hella')).toBeTruthy();
    });
  });
  describe('spaces', () => {
    it('should trim spaces', () => {
      expect(find(' a ', 'hola')).toBeTruthy();
    });
  });
  describe('multiple characters', () => {
    it('should not find for more typos than defined', () => {
      expect(find('hola ', 'hoñña')).toBeFalsy();
      expect(find('hola ', 'hoollaa')).toBeFalsy();
    });
  });
  describe('replace special characters', () => {
    it('should find only letters', () => {
      expect(find(' ?!!$aa(){} ', 'hola')).toBeTruthy();
    });
  });
  describe('case insensitive', () => {
    it('should match regardles case', () => {
      expect(find('SoLdEP', 'I love soldeplata')).toBeTruthy();
    });
  });
});
