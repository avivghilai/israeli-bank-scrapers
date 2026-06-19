import { type OtpCodeResponse, type OtpCodeRetriever, type OtpCodeRetrieverOptions } from './interface';

export async function getOtpCodeResponse(
  otpCodeRetriever: OtpCodeRetriever,
  options: OtpCodeRetrieverOptions,
): Promise<OtpCodeResponse> {
  const response = await otpCodeRetriever(options);
  if (typeof response === 'string') {
    return { code: response };
  }
  return response;
}
