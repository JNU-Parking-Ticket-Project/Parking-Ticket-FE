import { Txt } from '@quokka/design-system';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const INSTAGRAM_LINK = 'https://www.instagram.com/jnu_remember__/';

  const EMAIL = 'jnu_remember@naver.com';

  return (
    <footer className="grid md:grid-cols-12 w-full left-0 border-t border-[#DBDBDB] py-4 h-44">
      <div className="px-8 md:px-0 md:col-start-10 md:col-span-3 flex flex-col capitalize">
        <Txt size="h6" className="py-2">
          contact us
        </Txt>
        <Txt className="py-1">
          공식 인스타그램
          <Link to={INSTAGRAM_LINK}>
            <Txt className="underline lowercase">{'(@jnu_remember__)'}</Txt>
          </Link>
        </Txt>
        <Txt className="py-1">
          공식 메일
          <Txt className="lowercase">{`(${EMAIL})`}</Txt>
        </Txt>
        <Txt className="py-1">
          카카오톡 공식 채널(2025 전남대학교 총학생회 기억)
        </Txt>
      </div>
    </footer>
  );
};
