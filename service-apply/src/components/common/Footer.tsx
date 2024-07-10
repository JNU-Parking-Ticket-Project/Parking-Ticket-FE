import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

const HOME_PAGE_LINK = 'https://www.cnuheyday.com';

export const Footer = () => {
  return (
    <footer className="grid md:grid-cols-12 w-full left-0 border-t border-[#DBDBDB] py-4 h-44">
      <div className="px-8 md:px-0 md:col-start-10 md:col-span-3 flex flex-col capitalize">
        <Txt size="h6" className="py-2">
          contact us
        </Txt>
        <Txt className="py-2">
          공식 인스타그램:{' '}
          <Link to="https://www.instagram.com/cnu_heyday_/">
            <Txt className="underline lowercase">{'(@cnu_heyday_)'}</Txt>
          </Link>
        </Txt>
        <Txt>카카오톡 공식 채널:{' (전남대학 총학생회 HEYDEY)'}</Txt>
        <Txt>
          총학생회 홈페이지:{' '}
          <Link to={HOME_PAGE_LINK}>
            <Txt className="underline">홈페이지 바로가기</Txt>
          </Link>
        </Txt>
      </div>
    </footer>
  );
};
