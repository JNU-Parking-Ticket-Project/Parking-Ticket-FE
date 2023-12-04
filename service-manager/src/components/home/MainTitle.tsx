import { Txt } from '@quokka/design-system';

export const MainTitle = () => {
  return (
    <header className="pt-36 pb-12">
      <Txt size="h2" className="pb-4 block">
        전남대학교
      </Txt>
      <Txt size="h1">주차권 신청 시스템</Txt>
      <div>
        <Txt size="h5">관리자 페이지</Txt>
      </div>
    </header>
  );
};
