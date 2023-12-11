interface ModalErrorContent {
  type: 'MODAL';
  content: string;
  button: string;
}

interface AlertErrorContent {
  type: 'ALERT';
}

interface ReissueErrorContent {
  type: 'REISSUE';
}

interface AlertWithRedirectErrorContent {
  type: 'ALERT_WITH_REDIRECT';
  content: string;
  redirect: string;
}

interface NoneErrorContent {
  type: 'NONE';
}

type ERROR_TYPE =
  | ModalErrorContent
  | AlertErrorContent
  | ReissueErrorContent
  | AlertWithRedirectErrorContent
  | NoneErrorContent;

type ERROR_CODE =
  | 'GLOBAL_401_1'
  | 'AUTH_403_6'
  | 'AUTH_404_1'
  | 'USER_404_1'
  | 'USER_400_2'
  | 'COUNCIL_400_2'
  | 'COUNCIL_400_1'
  | 'COUPON_400_6'
  | 'COUPON_404_2'
  | 'SECTOR_404_2'
  | 'CAPTCHA_400_1'
  | 'ANNOUNCE_404_2'
  | 'DECRYPTION_500_1'
  | 'ENCRYPTION_500_1'
  | 'NOTICE_404_1';

export const getErrorContent = (error: ERROR_CODE): ERROR_TYPE => {
  switch (error) {
    case 'GLOBAL_401_1':
    case 'AUTH_403_6':
    case 'AUTH_404_1':
      return {
        type: 'REISSUE',
      };
    case 'USER_404_1':
      return {
        type: 'ALERT_WITH_REDIRECT',
        content: '존재하지 않는 유저 입니다.',
        redirect: '/',
      };
    case 'USER_400_2':
      return {
        type: 'ALERT_WITH_REDIRECT',
        content: '정상적인 인증 링크가 아닙니다.',
        redirect: '/',
      };
    case 'NOTICE_404_1':
      return {
        type: 'NONE',
      };
    case 'ENCRYPTION_500_1':
    case 'DECRYPTION_500_1':
    case 'COUNCIL_400_2':
    case 'COUNCIL_400_1':
    case 'COUPON_400_6':
    case 'COUPON_404_2':
    case 'SECTOR_404_2':
    case 'ANNOUNCE_404_2':
    case 'CAPTCHA_400_1':
    default:
      return {
        type: 'ALERT',
      };
  }
};
