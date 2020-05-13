import { find } from './typoTolerance';
describe('typo tolerance', () => {
  describe('single character', () => {
    it('should be falsy for no total coincidences', () => {
      expect(find('a', 'hello', { minChars: 1, typos: 0 })).toBeFalsy();
    });
    it('should find without typo tolerance', () => {
      expect(find('a', 'hella', { minChars: 1, typos: 0 })).toBeTruthy();
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
