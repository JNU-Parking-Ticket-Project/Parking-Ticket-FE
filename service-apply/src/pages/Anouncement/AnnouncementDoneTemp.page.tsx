import { Button, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const AnnouncementDoneTempPage = () => {
  return (
    <div className="h-[100dvh] flex justify-center items-center flex-col gap-8 text-center">
      <Txt size="h2">임시 저장이 완료 되었습니다.</Txt>
      <Txt>추후 로그인 시 임시 저장된 내용이 로드됩니다.</Txt>
      <Link to="/">
        <Button>홈으로 가기</Button>
      </Link>
    </div>
  );
};
