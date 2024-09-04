import { https } from '../functions/https';
import { Notice } from './dtos/notice.dtos';
import { isErrorResponse } from './dtos/response.dtos';

const noticeContentWhenError = "#### **별도의 회원가입 없이 신청폼으로 이동할 수 있습니다.**\n- 입력 후 폼으로 이동 클릭 시, 바로 회원정보가 등록되니 비밀번호 입력을 해주세요.\n- 등록 후 정보 불일치 시 주차권 신청에 불이익이 있습니다.\n- **비밀번호는 8~16자, 숫자, 소문자, 특수문자가 포함되어야 합니다.**\n- 문의사항은 총학생회 소통 창구를 통해 연락주세요.";

export const getNotice = async () => {
  const response = await https.get('/v1/notice');
  if (isErrorResponse(response)) {
    return new Notice({ noticeContent: noticeContentWhenError });
  }
  return new Notice(response);
};
