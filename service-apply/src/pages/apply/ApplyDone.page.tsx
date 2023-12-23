import { Button, Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const ApplyDonePage = () => {
  return (
    <div className="h-[100dvh] flex justify-center items-center flex-col gap-8 text-center">
      <Txt size="h2">신청이 완료 되었습니다.</Txt>
      <div className="flex flex-col">
        <Txt>결과는 추후 공지사항과 SNS를 통해 안내됩니다.</Txt>
        <Txt>감사합니다.</Txt>
      </div>
      <Link to="/">
        <Button>홈으로 가기</Button>
      </Link>
    </div>
  );
};
