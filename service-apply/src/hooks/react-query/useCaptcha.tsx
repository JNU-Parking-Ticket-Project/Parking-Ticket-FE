import { useSuspenseQuery } from '@tanstack/react-query';
import { getCaptcha } from '../../apis/captcha.apis';

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