import { Txt, Button } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const NotFoundContent = () => {
  return (
    <div className="h-[100dvh] flex  items-center justify-center">
      <div className="flex-col flex text-center">
        <Txt size="h3">페이지를 찾을 수 없습니다.</Txt>
        <Txt size="h6" className="mt-4">
          원하시는 페이지의 주소가 정확한지 확인해주세요.
        </Txt>
        <Link to="/apply-list">
          <Button size="medium" color="primary" className="mt-8">
            신청 목록으로
          </Button>
        </Link>
      </div>
    </div>
  );
};
