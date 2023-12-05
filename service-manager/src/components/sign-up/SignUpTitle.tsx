import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const SignUpTitle = () => {
  return (
    <header className="pt-36 pb-12">
      <h1 className="mb-4">
        <Link to="/">
          <Txt size="h2">전남대학교 주차권 신청 시스템</Txt>
        </Link>
      </h1>
      <div>
        <h2 className="inline mr-5">
          <Txt size="h3" color="primary">
            주차권 신청
          </Txt>
        </h2>
      </div>
      <hr className="mt-3 border-solid bg-black h-1" />
    </header>
  );
};
