import { useSuspenseQuery } from '@tanstack/react-query';
import { getCaptcha } from 'service-apply/src/apis/registration.apis';

export const useCaptchaQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['captcha'],
    queryFn: getCaptcha,
  });

  return {
    captchaCode: data.captchaCode,
    captchaImageUrl: data.captchaImageUrl,
  };
};
