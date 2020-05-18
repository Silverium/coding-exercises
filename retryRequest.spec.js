import { retryRequest } from './retryRequest';

describe('retryRequest', () => {
  let counter;
  const failingRequest = () =>
    new Promise((_r, t) =>
      setTimeout(() => {
        counter += 1;
        t(null);
      }, 1)
    );
  describe('failing request', () => {
    it('returns fallback after settled times to retry', async () => {
      counter = 0;
      const retries = 10;
      const fallback = {asdf:42};
      const result = await retryRequest(failingRequest, retries, fallback);
      console.log(result, counter);
      expect(counter).toBe(retries + 1);
      expect(result).toBe(fallback);
    });
  });
  describe('succesful request', () => {
    const successfulRequest = () =>
      new Promise((r, t) =>
        setTimeout(() => {
          counter += 1;
          counter > 3 ? r(true) : t(null);
        }, 1)
      );
    it('returns result after retrying', async () => {
      counter= 0;
      const result = await retryRequest(successfulRequest, 10);
      expect(result).toBeTruthy();
    });
  });
});
