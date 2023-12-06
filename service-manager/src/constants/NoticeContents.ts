type NoticeContentsType = {
  title: string;
  content: string;
  createdAt: string;
};

export const NOTICE_CONTENTS: NoticeContentsType = {
  title: '주차권 신청 안내',
  content:
    '<ul><li>별도의 회원가입 없이 신청폼으로 이동할 수 있습니다.</li><li>입력 후 로그인 버튼 클릭시 바로 회원정보가 등록되니 비밀번호 입력을 주의해주세요.</li><li>모든 신청란에 정확한 정보를 기입해주세요. 등록 후 정보 불일치시 주차권 신청에 불이익이 있습니다.</li></ul>',
  createdAt: '2023-01-01',
};
