import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const ApplyTitle = () => {
  return (
    <header className="mt-20 mb-12">
      <h1 className="mb-12">
        <Link to="/">
          <Txt size="h2">전남대학교 주차권 신청 시스템</Txt>
        </Link>
      </h1>
      <div>
        <h2 className="inline mr-5">
          <Txt size="h3" color="primay">
            주차권 신청
          </Txt>
        </h2>
        <Txt>신청 기간 : 2023년 12월 15일 14:00</Txt>
      </div>
      <hr className="mt-3 border-solid bg-black h-1" />
    </header>
  );
};
