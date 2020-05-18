/**
 * Wrapper function to retry an async function.
 * @param {Function} fn asynchronous function. Usually a request to Api, server, etc.
 * @param {number} times To retry the request in case it failed
 * @param {any} fallback value to be returned in case of failure all the times retried
 */
export const retryRequest = async (fn = async v => v, times = 1, fallback) => {
  try {
    return await fn();
  } catch {
    return times ? retryRequest(fn, times - 1, fallback) : fallback;
  }
};
