import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const CommonTitle = () => {
  return (
    <header className="pt-36 pb-12">
      <h1>
        <Link to="/">
          <Txt size="h2" className="max-lg:text-4xl max-sm:text-3xl">
            전남대학교 주차권 신청 시스템
          </Txt>
        </Link>
      </h1>
    </header>
  );
};
