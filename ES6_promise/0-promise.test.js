import getResponseFromAPI from './0-promise';

describe('getResponseFromAPI', () => {
  test('should return a Promise that resolves to API response data', async () => {
    await expect(getResponseFromAPI()).resolves.toBe('API response data');
  });
});
ls