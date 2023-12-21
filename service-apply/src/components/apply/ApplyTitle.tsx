import { Txt } from '@quokka/design-system';

export const ApplyTitle = () => {
  return (
    <h2 className="border-b-4 border-black mt-3 pb-2 max-sm:flex max-sm:flex-col">
      <Txt size="h3" color="primary" className="mr-5 max-sm:text-2xl">
        주차권 신청
      </Txt>
      <Txt>신청 기간 : 2023년 12월 15일 14:00</Txt>
    </h2>
  );
};
