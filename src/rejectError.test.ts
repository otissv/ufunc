/* eslint-disable */
import { rejectError } from './rejectError';

describe('rejectError', () => {
  it('should return instance of Promise', () => {
    expect(rejectError('this is error')).toBeInstanceOf(Promise);
  });

  it('should return reject error if passed string', async () => {
    const error = new Error('this is an error');
    const e = await rejectError(error.message).catch((e) => e);

    expect(e.message).toBe(error.message);
    expect(e).toBeInstanceOf(Error);
  });

  it('should return reject error if passed Error', async () => {
    const error = new Error('this is an error');
    const e = await rejectError(error).catch((e) => e);

    expect(e.message).toBe(error.message);
    expect(e).toBeInstanceOf(Error);
  });
});
