export class Captcha {
  captchaCode: string;
  captchaImageUrl: string;

  constructor({
    captchaCode,
    captchaImageUrl,
  }: {
    captchaCode: string;
    captchaImageUrl: string;
  }) {
    this.captchaCode = captchaCode;
    this.captchaImageUrl = captchaImageUrl;
  }
}
