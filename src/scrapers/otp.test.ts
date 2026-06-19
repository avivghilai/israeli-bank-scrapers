import { getOtpCodeResponse } from './otp';

describe('OTP helpers', () => {
  test('normalizes a string OTP response', async () => {
    const result = await getOtpCodeResponse(() => Promise.resolve('123456'), {
      attempt: 1,
      purpose: 'login',
      canRegisterTrustedDevice: true,
    });

    expect(result).toEqual({ code: '123456' });
  });

  test('keeps a structured OTP response', async () => {
    const result = await getOtpCodeResponse(
      () =>
        Promise.resolve({
          code: '123456',
          registerTrustedDevice: true,
        }),
      {
        attempt: 1,
        purpose: 'login',
        canRegisterTrustedDevice: true,
      },
    );

    expect(result).toEqual({
      code: '123456',
      registerTrustedDevice: true,
    });
  });
});
