import { Txt } from '@quokka/design-system';

export const HomeTitle = () => {
  return (
    <header className="pt-36 pb-12">
      <Txt
        size="h2"
        className="pb-4 block max-sm:text-4xl max-[600px]:text-3xl"
      >
        전남대학교
      </Txt>
      <Txt size="h1" className="max-sm:text-6xl max-[600px]:text-4xl">
        주차권 신청 시스템
      </Txt>
    </header>
  );
};
